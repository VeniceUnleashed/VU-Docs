---
title: SoldierAutoAimData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SoldierAutoAimData](#constructor-0)**() |
| **[SoldierAutoAimData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoldierAutoAimData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "poses" >}} | [AutoAimData](/vext/ref/fb/autoaimdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierAutoAimData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierAutoAimData {#constructor-0}
> **SoldierAutoAimData**()

Creates a new [SoldierAutoAimData](/vext/ref/fb/soldierautoaimdata) frostbite instance.

### SoldierAutoAimData {#constructor-1}
> **SoldierAutoAimData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoldierAutoAimData](/vext/ref/fb/soldierautoaimdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoldierAutoAimData {#constructor-2}
> **SoldierAutoAimData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierAutoAimData](/vext/ref/fb/soldierautoaimdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoldierAutoAimData](/vext/ref/fb/soldierautoaimdata). |

## Properties
### {{% prop-heading "poses" %}}
> **[AutoAimData](/vext/ref/fb/autoaimdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierAutoAimData](/vext/ref/fb/soldierautoaimdata) type.

