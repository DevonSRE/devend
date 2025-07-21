// pages/api/send-email.js

const PUBLIC_KEY = process.env.MAILJET_API_PUBLIC_KEY;
const PRIVATE_KEY = process.env.MAILJET_API_PRIVATE_KEY;

const Mailjet = require('node-mailjet');

const mailjet = new Mailjet({
  apiKey: PUBLIC_KEY || 'your-api-key',
  apiSecret: PRIVATE_KEY || 'your-api-secret'
});

const formatEventTypes = (eventTypes) => {
  if (!eventTypes) return '';
  return Object.entries(eventTypes)
    .filter(([_, checked]) => checked)
    .map(([type]) => type)
    .join(', ');
};

const createEmailContent = (data) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    date,
    needs,
    budget,
    guest,
    message,
    eventTypes,
    service,
    // For logistics specific fields
    fromDate,
    toDate,
    origin,
    destination,
    cargoDetails
  } = data;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2A1C51;">New ${service ? `${service} ` : ''}Inquiry</h2>
      
      <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
        <h3 style="color: #2A1C51; margin-bottom: 10px;">Contact Information</h3>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      </div>

      

      ${service === 'logistics' ? `
        <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <h3 style="color: #2A1C51; margin-bottom: 10px;">Logistics Details</h3>
          <p><strong>From Date:</strong> ${fromDate || 'Not specified'}</p>
          <p><strong>To Date:</strong> ${toDate || 'Not specified'}</p>
          <p><strong>Origin:</strong> ${origin || 'Not specified'}</p>
          <p><strong>Destination:</strong> ${destination || 'Not specified'}</p>
          <p><strong>Cargo Details:</strong> ${cargoDetails || 'Not specified'}</p>
        </div>
      ` : `
      <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
        <h3 style="color: #2A1C51; margin-bottom: 10px;">Event Details</h3>
        <p><strong>Service Type:</strong> ${service || 'Not specified'}</p>
        <p><strong>Event Types:</strong> ${formatEventTypes(eventTypes)}</p>
        <p><strong>Date:</strong> ${date || 'Not specified'}</p>
        <p><strong>Planning Needs:</strong> ${needs || 'Not specified'}</p>
        <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Guest Count:</strong> ${guest || 'Not specified'}</p>
      </div>
      `}

      ${message ? `
        <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <h3 style="color: #2A1C51; margin-bottom: 10px;">Additional Information</h3>
          <p>${message}</p>
        </div>
      ` : ''}
    </div>
  `;

  const textContent = `
    New ${service ? `${service} ` : ''}Inquiry

    Contact Information:
    Name: ${firstname} ${lastname}
    Email: ${email}
    Phone: ${phone || 'Not provided'}

  

    ${service === 'logistics' ? `
    Logistics Details:
    From Date: ${fromDate || 'Not specified'}
    To Date: ${toDate || 'Not specified'}
    Origin: ${origin || 'Not specified'}
    Destination: ${destination || 'Not specified'}
    Cargo Details: ${cargoDetails || 'Not specified'}
    ` :
      `Event Details:
    Service Type: ${service || 'Not specified'}
    Event Types: ${formatEventTypes(eventTypes)}
    Date: ${date || 'Not specified'}
    Planning Needs: ${needs || 'Not specified'}
    Estimated Budget: ${budget || 'Not specified'}
    Guest Count: ${guest || 'Not specified'}`
    }

    ${message ? `
    Additional Information:
    ${message}
    ` : ''}
  `;

  return { htmlContent, textContent };
};

const sendEmail = async (data) => {
  const { htmlContent, textContent } = createEmailContent(data);
  console.log({ htmlContent, textContent })

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'info@devontech.io',
            Name: 'Devon Techonologies LTD',
          },
          To: [
            {
              Email: 'info@dev-end.org',
              Name: 'Devend',
            },
          ],
          Cc: [
            {
              Email: 'ifunanya@dev-end.org',
              Name: 'Ifunanya Okeke',
            },
          ],
          Subject: `New ${data.service ? `${data.service} ` : ''}Inquiry from ${data.firstname} ${data.lastname}`,
          TextPart: textContent,
          HTMLPart: htmlContent,
        },
      ],
    });

  return request;
};

export async function POST(req) {
  const data = await req.json();

  // Validate required fields
  const requiredFields = ['firstname', 'lastname', 'email'];
  const missingFields = requiredFields.filter(field => !data[field]);

  if (missingFields.length > 0) {
    return new Response(
      JSON.stringify({
        error: `Missing required fields: ${missingFields.join(', ')}`
      }),
      { status: 400 }
    );
  }

  try {
    await sendEmail(data);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Mailjet Error:', error.response?.data || error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email.' }),
      { status: 500 }
    );
  }
}
