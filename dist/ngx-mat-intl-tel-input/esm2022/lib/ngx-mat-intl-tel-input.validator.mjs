import { parsePhoneNumber } from 'libphonenumber-js';
export const phoneNumberValidator = (control) => {
    const error = { validatePhoneNumber: true };
    let numberInstance;
    if (control.value) {
        try {
            numberInstance = parsePhoneNumber(control.value);
        }
        catch (e) {
            control.setValue(null);
            return error;
        }
        if (numberInstance && !numberInstance.isValid()) {
            control.setValue(null);
            if (!control.touched) {
                control.markAsTouched();
            }
            return error;
        }
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1pbnRsLXRlbC1pbnB1dC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWludGwtdGVsLWlucHV0L3NyYy9saWIvbmd4LW1hdC1pbnRsLXRlbC1pbnB1dC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLGdCQUFnQixFQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFFaEUsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUEyQixFQUFFLEVBQUU7SUFDbEUsTUFBTSxLQUFLLEdBQUcsRUFBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUMxQyxJQUFJLGNBQTJCLENBQUM7SUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ2pCLElBQUk7WUFDRixjQUFjLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMvQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNwQixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekI7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VW50eXBlZEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7cGFyc2VQaG9uZU51bWJlciwgUGhvbmVOdW1iZXJ9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZU51bWJlclZhbGlkYXRvciA9IChjb250cm9sOiBVbnR5cGVkRm9ybUNvbnRyb2wpID0+IHtcclxuICBjb25zdCBlcnJvciA9IHt2YWxpZGF0ZVBob25lTnVtYmVyOiB0cnVlfTtcclxuICBsZXQgbnVtYmVySW5zdGFuY2U6IFBob25lTnVtYmVyO1xyXG4gIGlmIChjb250cm9sLnZhbHVlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBudW1iZXJJbnN0YW5jZSA9IHBhcnNlUGhvbmVOdW1iZXIoY29udHJvbC52YWx1ZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnVtYmVySW5zdGFuY2UgJiYgIW51bWJlckluc3RhbmNlLmlzVmFsaWQoKSkge1xyXG4gICAgICBjb250cm9sLnNldFZhbHVlKG51bGwpO1xyXG4gICAgICBpZiAoIWNvbnRyb2wudG91Y2hlZCkge1xyXG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbiJdfQ==