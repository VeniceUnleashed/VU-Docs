---
title: InAirStateData
---

Inherits from 
[CharacterStateData](/vext/ref/fb/characterstatedata)

## Summary
### Constructors
| |
| ----------- |
| **[InAirStateData](#constructor-0)**() |
| **[InAirStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[InAirStateData](#constructor-2)**(other: [CharacterStateData](/vext/ref/fb/characterstatedata)) |
| **[InAirStateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "freeFallVelocity" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InAirStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InAirStateData {#constructor-0}
> **InAirStateData**()

Creates a new [InAirStateData](/vext/ref/fb/inairstatedata) frostbite instance.

### InAirStateData {#constructor-1}
> **InAirStateData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [InAirStateData](/vext/ref/fb/inairstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### InAirStateData {#constructor-2}
> **InAirStateData**(other: [CharacterStateData](/vext/ref/fb/characterstatedata))

Casts an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata) to [InAirStateData](/vext/ref/fb/inairstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterStateData](/vext/ref/fb/characterstatedata) | The instance to cast to [InAirStateData](/vext/ref/fb/inairstatedata). |

### InAirStateData {#constructor-3}
> **InAirStateData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InAirStateData](/vext/ref/fb/inairstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [InAirStateData](/vext/ref/fb/inairstatedata). |

## Properties
### {{% prop-heading "freeFallVelocity" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InAirStateData](/vext/ref/fb/inairstatedata) type.

