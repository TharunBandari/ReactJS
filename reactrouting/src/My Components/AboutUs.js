function ContactUs(){
    return(<div>
        <form>
            First Name <input type="text" /><br/>
            Last Name <input type="text" /><br/>
            Address <textarea rows="5" cols="50"/>
            <input type="submit" value="Save"/>
        </form>
    </div>)
}
export default ContactUs;