---
title: UrgencySetData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UrgencySetData](#constructor-0)**() |
| **[UrgencySetData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UrgencySetData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "urgencyModifiers" >}} | [UrgencyModifierData](/vext/ref/fb/urgencymodifierdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UrgencySetData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UrgencySetData {#constructor-0}
> **UrgencySetData**()

Creates a new [UrgencySetData](/vext/ref/fb/urgencysetdata) frostbite instance.

### UrgencySetData {#constructor-1}
> **UrgencySetData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UrgencySetData](/vext/ref/fb/urgencysetdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UrgencySetData {#constructor-2}
> **UrgencySetData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UrgencySetData](/vext/ref/fb/urgencysetdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UrgencySetData](/vext/ref/fb/urgencysetdata). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "urgencyModifiers" %}}
> **[UrgencyModifierData](/vext/ref/fb/urgencymodifierdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UrgencySetData](/vext/ref/fb/urgencysetdata) type.

