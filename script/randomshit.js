<Button onClick={() => setShowAddLocation(true)}>+Add Location</Button>
    <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
    <Button onClick={() => gotoStep(current + 1)}>Next</Button>
    {showAddLocation && (



)}













<Form.Item
            label={
              <label
                style={{
                  color: color,
                  fontWeight: "bold",
                  fontFamily: "poppins",
                }}
              >
                Phone
              </label>
            }
            name="phone"
            rules={[
              {
                required: true,
                message: "This field cannot be empty",
              },
              {
                pattern:
                 /^[+]?[(]([0-9]{3})[)]?[-\s.]?([0-9]{3})[-\s.]?([0-9]{4})$/im,
                message: "Please, enter a valid phone number",
              },
            ]}
          >
            <InputMask 
            mask="(999) 999-9999" 
            maskChar={null}
            value={companyPhone}
            onChange={(e) => {
              setCompanyPhone(e.target.value);
            }}
            >
            {(inputProps: any) => (
            <Input {...inputProps}         
              placeholder="(123)-123-4567"             
              type="tel"
            />)}
            </InputMask>                    
          </Form.Item>


setLocationPhone(e.target.value);











  const [checked, setChecked]: any = useState();

  const onCheckboxChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
    setChecked(checkedValues);
  };


const channelOptions = ["Web", "SMS","Facebook Reviews", "Google Reviews"];



export const stepper() = (props:any) => {

return(

  <HStack columnGap={10}>
        <Box
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          h={"500px"}
          bg={bg2}
          p={5}
          borderRadius={"1"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading size={"2xl"} mb={5} color={color}>
            Chat Inbox
          </Heading>
          <Heading fontWeight={"light"} size={"lg"} color={color}>
            Connect with your customers using various inboxes
          </Heading>
        </Box>
        <Box
          w={"100%"}
          h={"500px"}
          bg={bg}
          p={5}
          borderRadius={"20px"}
          shadow={"lg"}
        >
          <Heading size={"lg"} mb={5} color={color}>
            Inboxes
          </Heading>

          <Heading fontWeight={"light"} size={"lg"} color={color}>
            Connect with your customers using
          </Heading>

          <Form.Item
            name="ChatOption"
            rules={[
              {
                required: true,
                message: "Please select an option",
              },
            ]}
          >
            <Checkbox.Group
              options={channelOptions}
              defaultValue={["Web"]}
              onChange={onCheckboxChange}
            />
          </Form.Item>

          <Form.Item {...buttonItemLayout}>
            <Button onClick={() => gotoStep(current + 1)}>Next</Button>
            <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
          </Form.Item>
        </Box>
      </HStack>
    </>,









  const [checked, setChecked]: any = useState();
  const [chatSms, setChatSms] = useState("")
  const [ownerphone, setOwnerphone] = useState("");

  const onCheckboxChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
    setChecked(checkedValues);
  };


const channelOptions = ["Web", "SMS","Facebook Reviews", "Google Reviews"];






export const stepper() = (props:any) => {

return(

<HStack columnGap={10}>
        <Box
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          h={"500px"}
          bg={bg2}
          p={5}
          borderRadius={"1"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading size={"2xl"} mb={5} color={color}>
            Chat Inbox
          </Heading>
          <Heading fontWeight={"light"} size={"lg"} color={color}>
            Connect with your customers using various inboxes
          </Heading>
        </Box>
        <Box
          w={"100%"}
          h={"500px"}
          bg={bg}
          p={5}
          borderRadius={"20px"}
          shadow={"lg"}
        >
          <Heading size={"lg"} mb={5} color={color}>
            Inboxes
          </Heading>

          <Heading fontWeight={"light"} size={"lg"} color={color}>
            Connect with your customers using
          </Heading>

          <Form.Item
            name="ChatOption"
            rules={[
              {
                required: true,
                message: "Please select an option",
              },
            ]}
          >
            <Checkbox.Group
              options={channelOptions}
              defaultValue={["Web"]}
              onChange={onCheckboxChange}
            />
          </Form.Item>
            {checked && checked.includes("SMS") && (
              <Form.Item
                label={
                 <label
                style={{
                  color: color,
                  fontWeight: "bold",
                  fontFamily: "poppins",
                }}
              >
                Phone
                
              </label>
            }            
            name="phone"
            rules={[
              {
                required: true,
                message: "This field cannot be empty",
              },
              {
                pattern:
                 /^[+]?[(]([0-9]{3})[)]?[-\s.]?([0-9]{3})[-\s.]?([0-9]{4})$/im,
                message: "Please, enter a valid phone number",
              },
            ]}
          >
            <InputMask 
            mask="(999) 999-9999" 
            maskChar={null}
            value={chatSms}           
            >
            {(inputProps: any) => (
            <Input {...inputProps}         
              placeholder="(123)-123-4567"             
              type="tel"
            />)}
            </InputMask>
                <Button  onClick={() => setChatSms("")}>Save new Number?</Button>
                <Button  onClick={() => setOwnerphone("")}>Keep old phone Number</Button>                
              </Form.Item>
            )}
          <Form.Item {...buttonItemLayout}>
            <Button onClick={() => gotoStep(current + 1)}>Next</Button>
            <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
          </Form.Item>
        </Box>
      </HStack>


)