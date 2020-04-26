---
title: StabilizerData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[StabilizerData](#constructor-0)**() |
| **[StabilizerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[StabilizerData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "pitchStrength" >}} | float |
| {{< prop "rollStrength" >}} | float |
| {{< prop "verticalVelocityStrength" >}} | float |
| {{< prop "yawStrength" >}} | float |
| {{< prop "advancedYaw" >}} | bool |
| {{< prop "advanced" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StabilizerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StabilizerData {#constructor-0}
> **StabilizerData**()

Creates a new [StabilizerData](/vext/ref/fb/stabilizerdata) frostbite instance.

### StabilizerData {#constructor-1}
> **StabilizerData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [StabilizerData](/vext/ref/fb/stabilizerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### StabilizerData {#constructor-2}
> **StabilizerData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StabilizerData](/vext/ref/fb/stabilizerdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [StabilizerData](/vext/ref/fb/stabilizerdata). |

## Properties
### {{% prop-heading "pitchStrength" %}}
> **float**

### {{% prop-heading "rollStrength" %}}
> **float**

### {{% prop-heading "verticalVelocityStrength" %}}
> **float**

### {{% prop-heading "yawStrength" %}}
> **float**

### {{% prop-heading "advancedYaw" %}}
> **bool**

### {{% prop-heading "advanced" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StabilizerData](/vext/ref/fb/stabilizerdata) type.

