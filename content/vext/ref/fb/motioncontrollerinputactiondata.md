---
title: MotionControllerInputActionData
---

Inherits from 
[AxesInputActionData](/vext/ref/fb/axesinputactiondata)

## Summary
### Constructors
| |
| ----------- |
| **[MotionControllerInputActionData](#constructor-0)**() |
| **[MotionControllerInputActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MotionControllerInputActionData](#constructor-2)**(other: [AxesInputActionData](/vext/ref/fb/axesinputactiondata)) |
| **[MotionControllerInputActionData](#constructor-3)**(other: [InputActionData](/vext/ref/fb/inputactiondata)) |
| **[MotionControllerInputActionData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "button" >}} | [InputDeviceMotionControllerButtons](/vext/ref/fb/inputdevicemotioncontrollerbuttons) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MotionControllerInputActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MotionControllerInputActionData {#constructor-0}
> **MotionControllerInputActionData**()

Creates a new [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata) frostbite instance.

### MotionControllerInputActionData {#constructor-1}
> **MotionControllerInputActionData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MotionControllerInputActionData {#constructor-2}
> **MotionControllerInputActionData**(other: [AxesInputActionData](/vext/ref/fb/axesinputactiondata))

Casts an instance of type [AxesInputActionData](/vext/ref/fb/axesinputactiondata) to [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AxesInputActionData](/vext/ref/fb/axesinputactiondata) | The instance to cast to [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata). |

### MotionControllerInputActionData {#constructor-3}
> **MotionControllerInputActionData**(other: [InputActionData](/vext/ref/fb/inputactiondata))

Casts an instance of type [InputActionData](/vext/ref/fb/inputactiondata) to [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [InputActionData](/vext/ref/fb/inputactiondata) | The instance to cast to [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata). |

### MotionControllerInputActionData {#constructor-4}
> **MotionControllerInputActionData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata). |

## Properties
### {{% prop-heading "button" %}}
> **[InputDeviceMotionControllerButtons](/vext/ref/fb/inputdevicemotioncontrollerbuttons)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata) type.

