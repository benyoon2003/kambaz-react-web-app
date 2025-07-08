export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><h4>Assignment Name</h4></label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your Web application...
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>

                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group"> Assignment Group </label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as"> Display Grade as </label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="Percentage">
                                Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type"> Submission Type </label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">
                                Online</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label> Online Entry Options </label>
                    </td>
                    <td>

                        <input type="checkbox" name="check-entry-option" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-entry-option" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-entry-option" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-entry-option" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotations</label><br />

                        <input type="checkbox" name="check-entry-option" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>


                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to"> Assign to </label>
                    </td>
                    <td>
                        <input type="assign"
                            placeholder="Everyone"
                            id="wd-assign-to" /><br />
                    </td>

                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due </label>
                    </td>
                    <td>
                        <input type="date"
                            value="2024-05-13"
                            id="wd-due-date" /><br />
                    </td>

                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from"> Available From </label>
                    </td>
                    <td>
                        <input type="date"
                            value="2024-05-06"
                            id="wd-available-from" /><br />
                    </td>

                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until"> Until </label>
                    </td>
                    <td>
                        <input type="date"
                            value="2024-05-20"
                            id="wd-available-until" /><br />
                    </td>

                </tr>
                <tr>
                    <td align="right" valign="top"></td>
                    <button>Cancel</button>
                    <button>Save</button>
                </tr>

            </table>
        </div>
    );
}
