---
title: JumpStateData
---

Inherits from 
[CharacterStateData](/vext/ref/fb/characterstatedata)

## Summary
### Constructors
| |
| ----------- |
| **[JumpStateData](#constructor-0)**() |
| **[JumpStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[JumpStateData](#constructor-2)**(other: [CharacterStateData](/vext/ref/fb/characterstatedata)) |
| **[JumpStateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "jumpHeight" >}} | float |
| {{< prop "jumpEffectSize" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "JumpStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### JumpStateData {#constructor-0}
> **JumpStateData**()

Creates a new [JumpStateData](/vext/ref/fb/jumpstatedata) frostbite instance.

### JumpStateData {#constructor-1}
> **JumpStateData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [JumpStateData](/vext/ref/fb/jumpstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### JumpStateData {#constructor-2}
> **JumpStateData**(other: [CharacterStateData](/vext/ref/fb/characterstatedata))

Casts an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata) to [JumpStateData](/vext/ref/fb/jumpstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterStateData](/vext/ref/fb/characterstatedata) | The instance to cast to [JumpStateData](/vext/ref/fb/jumpstatedata). |

### JumpStateData {#constructor-3}
> **JumpStateData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [JumpStateData](/vext/ref/fb/jumpstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [JumpStateData](/vext/ref/fb/jumpstatedata). |

## Properties
### {{% prop-heading "jumpHeight" %}}
> **float**

### {{% prop-heading "jumpEffectSize" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [JumpStateData](/vext/ref/fb/jumpstatedata) type.

