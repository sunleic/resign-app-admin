import { PageContainer, ProForm, ProFormUploadDragger } from '@ant-design/pro-components';

export default () => {
  return (
      <PageContainer>
          <ProForm 
            style={{backgroundColor:'clear'}}
            onValuesChange={(_, values) => {
                console.log(`upload~~~~~~~:${JSON.stringify(values)}`);
            }}
            onFinish={async (value) => console.log(value)}
            >
            <ProFormUploadDragger 
                max={3} 
                label="该工具可以对IPA进行重签名" 
                name="dragger" 
                fieldProps={{
                }}
                rules={[

                ]}
            />
          </ProForm>
      </PageContainer>
  );
};