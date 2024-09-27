import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc } from 'firebase/firestore/lite';
import moment from 'moment';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCajBdKcIkcHidDHoKR-ZidtlC657FxnE8",
    authDomain: "vic-falls-bush-camp.firebaseapp.com",
    projectId: "vic-falls-bush-camp",
    storageBucket: "vic-falls-bush-camp.appspot.com",
    messagingSenderId: "824933852859",
    appId: "1:824933852859:web:1a2d7539444c82191deb9e",
    measurementId: "G-526RWWMZY9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function setBooking(data) {
    console.log("booking data:: ", data)
  // Add a new document in collection "cities"
    const result = await addDoc(collection(db, "mail"), {
        to: data.email,
        message: {
          subject: `Booking for ${data.email}`,
          html: `
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" lang="en">
  
          <head><link rel="stylesheet" type="text/css" hs-webfonts="true" href="https://fonts.googleapis.com/css?family=Lato|Lato:i,b,bi">
            <title>Email template</title>
            <meta property="og:title" content="Email template">
            
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
            <style type="text/css">
           
              a{ 
                text-decoration: underline;
                color: inherit;
                font-weight: bold;
                color: #253342;
              }
              
              h1 {
                font-size: 56px;
              }
              
                h2{
                font-size: 28px;
                font-weight: 900; 
              }
              
              p {
                font-weight: 100;
              }
              
              img {
                margin-top: 12px;
              }
              
              td {
            vertical-align: top;
              }
              
              #email {
                margin: auto;
                width: 600px;
                background-color: white;
              }
              
              .subtle-link {
                font-size: 9px; 
                text-transform:uppercase; 
                letter-spacing: 1px;
                color: #CBD6E2;
              }
              
            </style>
            
          </head>
            
            <body bgcolor="#F5F8FA" style="width: 100%; margin: auto 0; padding:0; font-family:Lato, sans-serif; font-size:18px; color:#33475B; word-break:break-word">
          
         <! View in Browser Link --> 
              
        <div id="email">
         
          
          
          <! Banner --> 
                 <table role="presentation" width="100%">
                    <tr>
                 
                      <td bgcolor="#485840" align="center" style="color: white;">
                    
                     <img alt="Flower" src="https://res.cloudinary.com/dtdbddo9o/image/upload/v1706582169/VFBC%20WEBSITE%20PICS/logo-upright_m1okny.png" width="200px" align="middle">
                        
                        <h3> Booking Inquiry! </h3>
                        
                      </td>
                </table>
          
          
          
          
            <! First Row --> 
          
          <table role="presentation" border="0" cellpadding="0" cellspacing="10px" style="padding: 30px 30px 30px 60px;">
             <tr>
               <td>
                <h4> Destination: ${data.destination} </h4>
                 
                    <p>Adults: ${data.adults}</p>
                 <p>Children: ${data.children}</p>
                 <p>Infants: ${data.infants}</p>
                 <h4> CheckIn: ${moment(data.dateRange[0]).format("DD MMM YYYY")}</h4>
                 <h4> CheckOut: ${moment(data.dateRange[1]).format("DD MMM YYYY")}</h4>
                 <h4> Email: ${data.email}</h4>
                 
                  </td> 
                  </tr>
                         </table>
         
          
                <! Unsubscribe Footer --> 
              
          <table role="presentation" bgcolor="#F5F8FA" width="100%" >
              <tr>
                  <td align="left" style="padding: 30px 30px;">
                    <p style="color:#99ACC2"> Victoria Falls Bush Camps </p>    
                  </td>
                  </tr>
              </table> 
              </div>
            </body>
              </html>
          `,
        },
      });
  return result;
}