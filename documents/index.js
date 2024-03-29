module.exports = ({ name, street_address, city_st_zip, child_name, price1, price2}) => {
   const today = new Date();
return `
   <!doctype html>
   <html>
      <head>
         <meta charset="utf-8">
         <title>PDF Result Template</title>
         <style>
            .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica',
            color: #555;
            }
            .margin-top {
            margin-top: 50px;
            }
            .justify-center {
            text-align: center;
            }
            .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
            }
            .invoice-box table td {
            padding: 5px;
            vertical-align: top;
            }
            .invoice-box table tr td:nth-child(2) {
            text-align: right;
            }
            .invoice-box table tr.top table td {
            padding-bottom: 20px;
            }
            .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
            }
            .invoice-box table tr.information table td {
            padding-bottom: 40px;
            }
            .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            }
            .invoice-box table tr.details td {
            padding-bottom: 20px;
            }
            .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
            }
            .invoice-box table tr.item.last td {
            border-bottom: none;
            }
            .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
            }
            @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
            }
            .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
            }
            }
         </style>
      </head>
      <body>
      <div class="invoice-box">
      <tr class="information">
      <td colspan="2">
      </td>
      <div class="justify-center"
      </tr>
      LAST WILL AND TESTAMENT OF
      ${name}
      </div> 

<p> I, ${name}, a resident of Los Angeles County, California, being of sound mind and memory, do declare that this is my last will and testament. I revoke all prior wills and codicils.</p>
ARTICLE ONE
DECLARATIONS CONCERNING FAMILY
1.1 Family.
I am unmarried and I am a father of two children. 

${child_name}, born on 10/02/10 and Ariana Guevara, born on 12/26/08

All references in this Will to {% if CL_Children.number() > 1 %}“my children” are to them. 
I intentionally leave nothing to anyone else claiming to be a child of mine regardless of the validity of their claim.{% endif %}{% if CL_AfterbornProvisions_mc == 'Option 2' %}Any provisions for my children in this will include any child of mine who may be born or adopted hereafter.
1.2 Personal Wishes.
Initial Guardian:	{{ CL_GuardianName1 | upper }}
I give the guardian of the person of my child or children the same authority over the person of my child as a parent having legal custody of a child and authorize the guardian to exercise the power without the need for notice, hearing, or court authorization in the same manner as if the authority were exercised by a parent having legal custody of a child. I request that no bond, surety, or other security be required because of the grant of these independent powers.{% endif %}
<div>Signed ${name}, on 
<td>
   Date: ${`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`}
</td>
</div>
<div>


      <P style="page-break-before: always">
      <div>
         <img src="ift-logo.png"/>
      </div>
         <div class="invoice-box">
            <table cellpadding="0" cellspacing="0">
               <tr class="top">
                  <td colspan="2">
                     <table>
                        <tr>
                           <td class="title"><img src="https://s3-us-west-1.amazonaws.com/instantfamilytrust.documate.org/logo.png"
                              style="width:100%; max-width:156px;"></td>
                           <td>
                              Date: ${`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`}
                           </td>
                        </tr>
                     </table>
                  </td>
               </tr>
               <tr class="information">
                  <td colspan="2">
                     <table>
                        <tr>
                           <td>
                              Full Name: ${name}
                           </td>
                           <td>
                              Address: ${street_address}
                              <br>${city_st_zip}
                           </td>
                        </tr>
                     </table>
                  </td>
               </tr>
               <tr class="heading">
                  <td>Purchased items:</td>
                  <td>Price</td>
               </tr>
               <tr class="item">
                  <td>California Will:</td>
                  <td>$${price1}</td>
               </tr>
               <tr class="item">
                  <td>California Estate:</td>
                  <td>$${price2}</td>
               </tr>
               
            </table>
            <br />
            <h1 class="justify-center">Total price: $${parseInt(price1) + parseInt(price2)}</h1>
         </div>
      </body>
      
   </html>
   `;
};