---
title: PadInputActionData
---

Inherits from 
[AxesInputActionData](/vext/ref/fb/axesinputactiondata)

## Summary
### Constructors
| |
| ----------- |
| **[PadInputActionData](#constructor-0)**() |
| **[PadInputActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PadInputActionData](#constructor-2)**(other: [AxesInputActionData](/vext/ref/fb/axesinputactiondata)) |
| **[PadInputActionData](#constructor-3)**(other: [InputActionData](/vext/ref/fb/inputactiondata)) |
| **[PadInputActionData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "button" >}} | [InputDevicePadButtons](/vext/ref/fb/inputdevicepadbuttons) |
| {{< prop "pov" >}} | [InputDevicePOVs](/vext/ref/fb/inputdevicepovs) |
| {{< prop "pS3AlternativeButton" >}} | [InputDevicePadButtons](/vext/ref/fb/inputdevicepadbuttons) |
| {{< prop "useSquareInput" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PadInputActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PadInputActionData {#constructor-0}
> **PadInputActionData**()

Creates a new [PadInputActionData](/vext/ref/fb/padinputactiondata) frostbite instance.

### PadInputActionData {#constructor-1}
> **PadInputActionData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PadInputActionData](/vext/ref/fb/padinputactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PadInputActionData {#constructor-2}
> **PadInputActionData**(other: [AxesInputActionData](/vext/ref/fb/axesinputactiondata))

Casts an instance of type [AxesInputActionData](/vext/ref/fb/axesinputactiondata) to [PadInputActionData](/vext/ref/fb/padinputactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AxesInputActionData](/vext/ref/fb/axesinputactiondata) | The instance to cast to [PadInputActionData](/vext/ref/fb/padinputactiondata). |

### PadInputActionData {#constructor-3}
> **PadInputActionData**(other: [InputActionData](/vext/ref/fb/inputactiondata))

Casts an instance of type [InputActionData](/vext/ref/fb/inputactiondata) to [PadInputActionData](/vext/ref/fb/padinputactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [InputActionData](/vext/ref/fb/inputactiondata) | The instance to cast to [PadInputActionData](/vext/ref/fb/padinputactiondata). |

### PadInputActionData {#constructor-4}
> **PadInputActionData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PadInputActionData](/vext/ref/fb/padinputactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PadInputActionData](/vext/ref/fb/padinputactiondata). |

## Properties
### {{% prop-heading "button" %}}
> **[InputDevicePadButtons](/vext/ref/fb/inputdevicepadbuttons)**

### {{% prop-heading "pov" %}}
> **[InputDevicePOVs](/vext/ref/fb/inputdevicepovs)**

### {{% prop-heading "pS3AlternativeButton" %}}
> **[InputDevicePadButtons](/vext/ref/fb/inputdevicepadbuttons)**

### {{% prop-heading "useSquareInput" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PadInputActionData](/vext/ref/fb/padinputactiondata) type.

