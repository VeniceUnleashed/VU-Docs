---
title: OnGroundStateData
---

Inherits from 
[CharacterStateData](/vext/ref/fb/characterstatedata)

## Summary
### Constructors
| |
| ----------- |
| **[OnGroundStateData](#constructor-0)**() |
| **[OnGroundStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[OnGroundStateData](#constructor-2)**(other: [CharacterStateData](/vext/ref/fb/characterstatedata)) |
| **[OnGroundStateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "jumpDelay" >}} | float |
| {{< prop "jumpStaminaPenalty" >}} | float |
| {{< prop "allowedDistanceFromGround" >}} | float |
| {{< prop "groundHugging" >}} | bool |
| {{< prop "limitDownwardVelocity" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OnGroundStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OnGroundStateData {#constructor-0}
> **OnGroundStateData**()

Creates a new [OnGroundStateData](/vext/ref/fb/ongroundstatedata) frostbite instance.

### OnGroundStateData {#constructor-1}
> **OnGroundStateData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [OnGroundStateData](/vext/ref/fb/ongroundstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### OnGroundStateData {#constructor-2}
> **OnGroundStateData**(other: [CharacterStateData](/vext/ref/fb/characterstatedata))

Casts an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata) to [OnGroundStateData](/vext/ref/fb/ongroundstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterStateData](/vext/ref/fb/characterstatedata) | The instance to cast to [OnGroundStateData](/vext/ref/fb/ongroundstatedata). |

### OnGroundStateData {#constructor-3}
> **OnGroundStateData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OnGroundStateData](/vext/ref/fb/ongroundstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [OnGroundStateData](/vext/ref/fb/ongroundstatedata). |

## Properties
### {{% prop-heading "jumpDelay" %}}
> **float**

### {{% prop-heading "jumpStaminaPenalty" %}}
> **float**

### {{% prop-heading "allowedDistanceFromGround" %}}
> **float**

### {{% prop-heading "groundHugging" %}}
> **bool**

### {{% prop-heading "limitDownwardVelocity" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OnGroundStateData](/vext/ref/fb/ongroundstatedata) type.

