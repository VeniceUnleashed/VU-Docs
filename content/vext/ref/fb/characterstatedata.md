---
title: CharacterStateData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[CharacterStateData](#constructor-0)**() |
| **[CharacterStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CharacterStateData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "poseInfo" >}} | [CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterStateData {#constructor-0}
> **CharacterStateData**()

Creates a new [CharacterStateData](/vext/ref/fb/characterstatedata) frostbite instance.

### CharacterStateData {#constructor-1}
> **CharacterStateData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CharacterStateData](/vext/ref/fb/characterstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CharacterStateData {#constructor-2}
> **CharacterStateData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterStateData](/vext/ref/fb/characterstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CharacterStateData](/vext/ref/fb/characterstatedata). |

## Properties
### {{% prop-heading "poseInfo" %}}
> **[CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterStateData](/vext/ref/fb/characterstatedata) type.

