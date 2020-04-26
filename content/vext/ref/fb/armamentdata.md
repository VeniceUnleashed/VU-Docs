---
title: ArmamentData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[ArmamentData](#constructor-0)**() |
| **[ArmamentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ArmamentData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "threatLength" >}} | int |
| {{< prop "turretData" >}} | [TurretData](/vext/ref/fb/turretdata) \| nil |
| {{< prop "isAntiAircraft" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ArmamentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ArmamentData {#constructor-0}
> **ArmamentData**()

Creates a new [ArmamentData](/vext/ref/fb/armamentdata) frostbite instance.

### ArmamentData {#constructor-1}
> **ArmamentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ArmamentData](/vext/ref/fb/armamentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ArmamentData {#constructor-2}
> **ArmamentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ArmamentData](/vext/ref/fb/armamentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ArmamentData](/vext/ref/fb/armamentdata). |

## Properties
### {{% prop-heading "threatLength" %}}
> **int**

### {{% prop-heading "turretData" %}}
> **[TurretData](/vext/ref/fb/turretdata)** | **nil**

### {{% prop-heading "isAntiAircraft" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ArmamentData](/vext/ref/fb/armamentdata) type.

