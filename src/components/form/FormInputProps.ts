export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    type?: React.HTMLInputTypeAttribute | undefined;
    disabled?: boolean
}