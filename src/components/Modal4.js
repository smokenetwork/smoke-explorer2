import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Modal4 extends Component {
  render() {
    return (
      <div className="modal fade" id="myModal4" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div className="modal-dialog priv-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </button>
              <h4 className="title title-up">Terms of Use</h4>
            </div>
            <div className="modal-body">
              <h4>General</h4>
              <p>By accessing and using the smoke.network website (our or this “Website”), you agree to the following
                terms of use as they may be modified, changed, supplemented or updated from time to time
                (collectively, these “terms”), as well as all applicable laws and regulations. Please read the
                following terms and conditions carefully. If you do not agree to all of these terms, please do not use
                this Website or any information, links or content contained on this Website. Your access to and use of
                this Website constitutes your acceptance of and agreement to abide by each of the terms set forth
                below including our Privacy Policy which is hereby incorporated in these terms by reference. If you
                are using our Website on behalf of your organization, that organization accepts these terms.
                <br/><br/>
                These terms may be modified, changed, supplemented or updated by 420smokers.us (“420smokers.us”, “we”,
                “us” or “our”) in its sole discretion at any time without advance notice. We suggest that you visit
                this page regularly to keep up to date with any changes. Your continued use of this Website will
                confirm your acceptance of these terms as modified, changed, supplemented or updated by us. If you do
                not agree to such revised terms you must stop using this Website and any information, links or content
                contained on this Website.</p>
              <h4>Use of Website</h4>
              <p>The purpose of our Website is to provide you with you some general information about the software
                being developed by 420smokers.us. You must not breach any of the following terms or our Acceptable Use
                Policy set out below.</p>
              <h4>Open Source Software</h4>
              <p>We may make (but are not obligated to make) the source code for the software we develop available for
                download as open source software. You agree to be bound by and comply with, any license agreement that
                applies to this open source software. You will not indicate that you are associated with us in
                connection with your use, modifications or distributions of this open source software.
                <br/><br/>
                When we host any software and enable you to access and use such software through our websites
                including this Website, then these terms will apply to such access and use, as well as any license
                agreements that we may enter into with you.</p>
              <h4>Third Party Content</h4>
              <p>We may display third-party content, advertisements, links, promotions, logos and other materials on
                our Website (collectively, the “Third-Party Content”) for your convenience only. We do not approve of,
                control, endorse or sponsor any third parties or Third-Party Content, and we make no representations
                or warranties of any kind regarding such Third-Party Content, including, without limitation, the
                accuracy, validity, legality, copyright compliance, or decency of such content. Your use of or
                interactions with any Third-Party Content, and any third party that provides Third-Party Content are
                solely between you and such third parties and we are not responsible or liable in any manner for such
                use or interactions. We are not responsible for any of the content on third party sites linked to our
                Website nor can it be assumed that we have reviewed or approved of such sites or their content, nor do
                we warrant that the links to these sites work or are up to date.
              </p>
              <h4>User Content</h4>
              <p>If you post, upload, input, provide or submit your personal data to us, including without limitation,
                your name, email address, IP address, cryptocurrency address, text, code or other information and
                materials, sign up to our mailing list or create an account on our Website (collectively, your “User
                Content”), you must ensure that the User Content provided by you at that or at any other time is true,
                accurate, up to date and complete and that any User Content you post, upload, input, provide or submit
                to us or via our Website do not breach or infringe the intellectual property rights of any third
                party. We do not own, control or endorse any User Content that is transmitted, stored or processed via
                our Website or sent to us and we are not responsible or liable for any User Content. You are solely
                responsible and liable for all of your User Content and for your use of any interactive features,
                links or information or content on our Website, and you represent and warrant that (i) you own all
                intellectual property rights (or have obtained all necessary permissions) to provide your User Content
                and to grant the licenses in these terms; (ii) your User Content will not violate any agreements or
                confidentiality obligations; and (iii) your User Content will not violate, infringe or misappropriate
                any intellectual property right or other proprietary right, including the right of publicity or
                privacy, of any person or entity.
                <br/><br/>
                You are entirely responsible for maintaining the confidentiality of your User Content and any of your
                non-public information. Furthermore, you are entirely responsible for any and all activities that
                occur under your account (if any). You agree to notify us immediately of any unauthorized use of your
                User Content, account or any other breach of security. We will not be liable for any loss or damages
                that you may incur as a result of someone else using your User Content or account, either with or
                without your knowledge. However, you could be held liable for losses incurred by the 420smokers.us
                Parties (as defined below) or another party due to someone else using your User Content or account.
                You may not use anyone else’s User Content or account at any time without the permission of such
                person or entity.
                <br/><br/>
                By posting, uploading, inputting, providing or submitting your User Content to us, you grant
                420smokers.us, its affiliates and any necessary sub-licensees a non-exclusive, worldwide, perpetual,
                right and permission to use, reproduce, copy, edit, modify, translate, reformat, create derivative
                works from, distribute, transmit, publicly perform and publicly display your User Content and
                sub-license such rights to others.
                <br/><br/>
                You must immediately update and inform us of any changes to your User Content by updating your
                personal data by contacting us at hello@smoke.network so that we can communicate with you effectively
                and provide accurate and up to date information to you.
                <br/><br/>
                Although we have no obligation to screen, edit or monitor User Content, we reserve the right, and have
                absolute discretion, to remove, screen or edit User Content. Furthermore, if we have reason to believe
                that there is likely to be a breach of security, breach or misuse of our Website or if you breach any
                of your obligations under these terms or the Privacy Policy, we may suspend your use of this Website
                at any time and for any reason.
                <br/><br/>
                Any User Content submitted by you on this Website may be accessed by us globally.
              </p>
              <h4>Feedback</h4>
              <p>If you decide to submit questions, comments, suggestions, ideas, original or creative materials or
                other information to us (collectively, “Feedback”), you do so on your own accord and not based on any
                request or solicitation from us. Feedback does not include User Content. We reserve the right to use
                Feedback for any purpose at no charge and without compensation to you. Do not send us Feedback if you
                expect to be paid or want to continue to own or claim rights to your Feedback.The purpose of these
                terms is to avoid potential misunderstandings or disputes if 420smokers.us’s products, services,
                business ideas or business strategies might seem similar to ideas submitted to us as Feedback. If you
                decide to send us Feedback, you acknowledge and understand that the 420smokers.us Parties make no
                assurances that your Feedback will be treated as confidential or proprietary.
              </p>
              <h4>Aggregate Information</h4>
              <p>We may gather information and statistics collectively about all visitors to this Website which may
                include the information supplied by you. This information helps us to design and arrange our Web pages
                in a user-friendly manner and to continually improve our Website to better meet the needs of our
                Website users. We may share this kind of aggregate data with selected third parties to assist with
                these purposes. Personal data is processed by us in accordance with our Privacy Policy.
              </p>
              <h4>Intellectual Property</h4>
              <p>Smoke.Network and its licensors retain all right, title and interest in and to this Website and its
                products and services, including all copyrights, patents, trade secrets, trademarks, other
                intellectual property rights, trade names, logos, slogans, custom graphics, button icons, scripts,
                videos, text, images, software, code, files, content, information and other material available on our
                Website and nothing on this Website may be copied, imitated or used, in whole or in part, without our
                or the applicable licensor’s prior written permission. 420smokers.us reserves all rights not expressly
                granted.
                <br/><br/>
                Any unauthorized reproduction is prohibited.
                <br/><br/>
                You may only access, use and print the information and material on this Website for non-commercial or
                personal use provided that you are authorized to access such information or material and keep intact
                all copyright and proprietary notices.
                <br/><br/>
                You must not otherwise reproduce, adapt, store, transmit, distribute, print, display, commercialize,
                publish or create derivative works from any part of the content, format or design of this Website.
                <br/><br/>
                If you seek to reproduce or otherwise use the content on this Website in any way it is your
                responsibility to obtain approval from us for such use. Nothing in these terms will be construed as
                conferring any right or license to any patent, trademark, copyright or other proprietary rights of
                420smokers.us or any third party, whether by estoppel, implication or otherwise.
              </p>
              <h4>Acceptable Use Policy</h4>
              <p>You must only use the content or services provided through this Website for their stated purpose. You
                must not use this Website to:
                <ol>
                  <li>publish, post, send, upload, submit, display or disseminate any information or material and/or
                    otherwise make available or engage in any conduct that is unlawful, discriminatory, harassing,
                    libellous, defamatory, abusive, threatening, harmful, offensive, obscene, tortious or otherwise
                    objectionable;
                  </li>
                  <li>display, upload or transmit material that encourages conduct that may constitute a criminal
                    offense, result in civil liability or otherwise violate or breach any applicable laws, regulations
                    or code of practice;
                  </li>
                  <li>interfere or violate the legal rights (such as rights of privacy and publicity) of others or
                    violate others use or enjoyment of this Website;
                  </li>
                  <li>violate any applicable laws or regulations;</li>
                  <li>use this Website or links on this Website in any manner that could interfere with, disrupt,
                    negatively affect or inhibit other users from using this Website or links on this Website or that
                    could damage, disable, overburden or impair the functioning of this Website or our servers or any
                    networks connected to any of our servers in any manner;
                  </li>
                  <li>create a false identity for the purpose of misleading others or fraudulently or otherwise
                    misrepresent yourself to be another person or a representative of another entity including, but
                    not limited to, an authorized user of this Website or a 420smokers.us representative, or
                    fraudulently or otherwise misrepresent that you have an affiliation with a person, entity or
                    group;
                  </li>
                  <li>mislead or deceive us, our representatives and any third parties who may rely on the information
                    provided by you, by providing inaccurate or false information, which includes omissions of
                    information;
                  </li>
                  <li>disguise the origin of any material transmitted through the services provided by this Website
                    (whether by forging message/packet headers or otherwise manipulating normal identification
                    information);
                  </li>
                  <li>violate, infringe or misappropriate any intellectual or industrial property right of any person
                    (such as copyright, trademarks, patents, or trade secrets, or other proprietary rights of any
                    party) or commit a tort;
                  </li>
                  <li>upload files that contain viruses, Trojan horses, worms, time bombs, cancelbots, corrupted
                    files, or any other similar software or programs that may damage the operation of another’s
                    computer or property;
                  </li>
                  <li>send, upload, display or disseminate or otherwise make available material containing or
                    associated with spam, junk mail, advertising for pyramid schemes, chain letters, virus warnings
                    (without first confirming the authenticity of the warning), or any other form of unauthorized
                    advertising or promotional material;
                  </li>
                  <li>access any content, area or functionality of this Website that you are prohibited or restricted
                    from accessing or attempt to bypass or circumvent measures employed to prevent or limit your
                    access to any content, area or functionality of this Website;
                  </li>
                  <li>obtain unauthorized access to or interfere with the performance of the servers which host this
                    Website or provide the services on this Website or any servers on any associated networks or
                    otherwise fail to comply with any policies or procedures relating to the use of those servers;
                  </li>
                  <li>attempt to gain unauthorized access to any services or products, other accounts, computer
                    systems, or networks connected to any of our servers through hacking, password mining, or any
                    other means;
                  </li>
                  <li>obtain or attempt to obtain any materials or information through any means not intentionally
                    made available through this Website or its services;
                  </li>
                  <li>harvest or otherwise collect, whether aggregated or otherwise, data about others including
                    e-mail addresses and/or distribute or sell such data in any manner;
                  </li>
                  <li>use any part of this Website other than for its intended purpose; or</li>
                  <li>use this Website to engage in or promote any activity that violates these terms.</li>
                </ol>
              </p>
              <h4>Indemnification</h4>
              <p>To the fullest extent permitted by applicable law, you will indemnify, defend and hold harmless us
                and our respective past, present and future employees, officers, directors, contractors, consultants,
                equity holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates,
                agents, representatives, predecessors, successors and assigns (collectively, the “420smokers.us
                Parties”) from and against all claims, damages, liabilities, losses, costs and expenses (including
                attorneys’ fees) that arise from or relate to: (i) your access to or use of our Website, products or
                services; (ii) your User Content; (iii) any Feedback you provide; or (iv) your violation of these
                Terms.
                <br/><br/>
                We reserve the right to exercise sole control over the defense, at your expense, of any claim subject
                to indemnification pursuant to these terms. This indemnity is in addition to, and not in lieu of, any
                other indemnities set forth in a written agreement between you and 420smokers.us.
              </p>
              <h4>Disclaimer</h4>
              <p>THIS WEBSITE AND ALL INFORMATION, PRODUCTS AND SERVICES PROVIDED THROUGH THIS WEBSITE ARE PROVIDED
                “AS IS” AND ON AN “AS AVAILABLE” BASIS WITHOUT ANY REPRESENTATIONS, WARRANTIES, PROMISES OR GUARANTEES
                WHATSOEVER OF ANY KIND INCLUDING, WITHOUT LIMITATION, ANY REPRESENTATIONS, WARRANTIES, PROMISES OR
                GUARANTEES REGARDING THE ACCURACY, CURRENCY, COMPLETENESS, ADEQUACY, AVAILBALITY, SUITABILITY OR
                OPERATION OF THIS WEBSITE, ANY PRODUCTS OR SERVICES WE MAY PROVIDE THROUGH IT OR THE INFORMATION OR
                MATERIAL IT CONTAINS.
                <br/><br/>
                EACH OF THE 420SMOKERS.US PARTIES DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS,
                IMPLIED OR STATUTORY, WITH REGARD TO THE FOREGOING, INCLUDING, WITHOUT LIMITATION: (A) ANY WARRANTY
                WITH RESPECT TO THE CONTENT, INFORMATION, DATA, SERVICES, AVAILABLITY, UNINTERRUPTED ACCESS, OR
                SERVICES OR PRODUCTS PROVIDED THROUGH OR IN CONNECTION WITH THIS WEBSITE; (B) ANY WARRANTIES THAT THIS
                WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES, WORMS, TROJAN HORSES OR OTHER
                HARMFUL COMPONENTS; (C) ANY WARRANTIES THAT THIS WEBSITE, ITS CONTENT AND ANY SERVICES OR PRODUCTS
                PROVIDED THROUGH IT ARE ERROR-FREE OR THAT DEFECTS IN THIS WEBSITE, ITS CONTENT OR SUCH SERVICES OR
                PRODUCTS WILL BE CORRECTED; (D) ANY WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF MERCHANTABILITY OR
                FITNESS FOR A PARTICULAR PURPOSE; (E) ANY WARRANTIES THAT THIS WEBSITE WILL BE COMPATIBLE WITH YOUR
                COMPUTER OR OTHER ELECTRONIC EQUIPMENT; AND (F) ANY WARRANTIES OF NON-INFRINGEMENT. THE MATERIALS AND
                RELATED GRAPHICS PUBLISHED ON THIS WEBSITE COULD INCLUDE TECHNICAL INACCURACIES OR TYPOGRAPHICAL
                ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION CONTAINED ON THIS WEBSITE. THE 420SMOKERS.US
                PARTIES MAY MAKE IMPROVEMENTS AND/OR CHANGES TO THE WEBSITE, ITS PRODUCTS, SERVICES AND/OR THE
                MATERIALS DESCRIBED ON THIS WEBSITE AT ANY TIME.
                <br/><br/>
                In addition, to the maximum extent permitted by law, none of the 420smokers.us Parties shall be
                responsible or liable for:
                <ol>
                  <li>any loss, liability, cost, expense or damage suffered or incurred arising out of or in
                    connection with any access to or use of this Website or any of its content;
                  </li>
                  <li>any reliance on, or decision made on the basis of, information or material shown on or omitted
                    from this Website;
                  </li>
                  <li>any representation or otherwise in respect of the existence or availability of any job, vacancy,
                    assignment or other engagement or appointment advertised on this Website (if any) and any
                    representation or otherwise that we have or will ask for a candidate’s information, will or have
                    asked to interview or hire a candidate, or that any candidates will meet our needs;
                  </li>
                  <li>any matter affecting this Website or any of its content caused by circumstances beyond our
                    reasonable control;
                  </li>
                  <li>the performance of this Website and any fault, delays, interruptions or lack of availability of
                    this Website and any of the services or products provided through this Website, which may occur
                    due to increased usage of this Website, intermittent failures of this Website or the need for
                    repairs, maintenance or the introduction of new facilities, products or services; and
                  </li>
                  <li>any information or material on any website operated by a third party which may be accessed from
                    this Website.
                  </li>
                </ol>
                IN NO EVENT WILL THE 420SMOKERS.US PARTIES BE RESPONSIBLE OR LIABLE FOR ANY CLAIMS, DAMAGES,
                LIABILITIES, LOSSES, COSTS OR EXPENSES OF ANY KIND, WHETHER DIRECT OR INDIRECT, CONSEQUENTIAL,
                COMPENSATORY, INCIDENTAL, ACTUAL, EXEMPLARY, PUNITIVE OR SPECIAL (INCLUDING DAMAGES FOR LOSS OF
                BUSINESS, REVENUES, PROFITS, DATA, USE, GOODWILL OR OTHER INTANGIBLE LOSSES) REGARDLESS OF WHETHER THE
                420SMOKERS.US PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, LIABILITIES, LOSSES, COSTS
                OR EXPENSES, ARISING OUT OF OR IN CONNECTION WITH: (A) THE USE OR PERFORMANCE OF THIS WEBSITE; (B) ANY
                PROVISION OF OR FAILURE TO PROVIDE THIS WEBSITE OR ITS SERVICES (INCLUDING WITHOUT LIMITATION ANY
                LINKS ON OUR WEBSITE); (C) ANY INFORMATION AVAILABLE FROM THIS WEBSITE; (D) ANY CONDUCT OR CONTENT OF
                ANY THIRD PARTY; (E) UNAUTHORIZED ACCESS, USE OR ALTERATION OF THE TRANSMISSION OF DATA OR CONTENT TO
                OR FROM US; OR (F) THE FAILURE TO RECEIVE IN ANY WAY THE TRANSMISSION OF ANY DATA, CONTENT, FUNDS OR
                PROPERTY FROM YOU. IN NO CIRCUMSTANCES WILL THE AGGREGATE LIABILITY OF THE 420SMOKERS.US PARTIES
                ARISING UNDER THESE TERMS EXCEED $5.00 USD.
              </p>
              <h4>General</h4>
              <p>These terms are governed by the laws of the Cayman Islands. All claims arising out of or relating to
                these terms will be litigated exclusively in the courts of the Cayman Islands and we and you consent
                to personal jurisdiction in those courts.
                <br/><br/>
                These terms control the relationship between us and you. They do not create any third-party
                beneficiary rights.
                <br/><br/>
                If you do not comply with these terms, and we don’t take action right away, this doesn’t mean that we
                are giving up any rights that we may have (such as taking action in the future).
                <br/><br/>
                If it turns out that a particular term is not enforceable, the term will be modified such that it is
                enforceable and this will not affect any other terms contained herein.
                <br/><br/>
                If you have any questions regarding these terms, please contact us at hello@smoke.network.
                <br/><br/>
                Copyright © 2017 smoke.network. All rights reserved.
                <br/><br/>
                Dated: July 28, 2017</p>
            </div>
            <div className="modal-footer">
              {/*// <!-- <button type="button" className="btn btn-default">Nice Button</button>*/}
              {/*// <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button> -->*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal4;
