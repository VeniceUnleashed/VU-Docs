---
title: InputActionData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[InputActionData](#constructor-0)**() |
| **[InputActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[InputActionData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "isAnalog" >}} | bool |
| {{< prop "negateValue" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InputActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InputActionData {#constructor-0}
> **InputActionData**()

Creates a new [InputActionData](/vext/ref/fb/inputactiondata) frostbite instance.

### InputActionData {#constructor-1}
> **InputActionData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [InputActionData](/vext/ref/fb/inputactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### InputActionData {#constructor-2}
> **InputActionData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputActionData](/vext/ref/fb/inputactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [InputActionData](/vext/ref/fb/inputactiondata). |

## Properties
### {{% prop-heading "isAnalog" %}}
> **bool**

### {{% prop-heading "negateValue" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InputActionData](/vext/ref/fb/inputactiondata) type.

