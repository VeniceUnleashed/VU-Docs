---
title: CharacterSprintData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[CharacterSprintData](#constructor-0)**() |
| **[CharacterSprintData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CharacterSprintData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sprintPowerDecreasePerSecond" >}} | float |
| {{< prop "sprintPowerIncreasePerSecond" >}} | float |
| {{< prop "sprintMinimumPower" >}} | float |
| {{< prop "allowContinousSprinting" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterSprintData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterSprintData {#constructor-0}
> **CharacterSprintData**()

Creates a new [CharacterSprintData](/vext/ref/fb/charactersprintdata) frostbite instance.

### CharacterSprintData {#constructor-1}
> **CharacterSprintData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CharacterSprintData](/vext/ref/fb/charactersprintdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CharacterSprintData {#constructor-2}
> **CharacterSprintData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterSprintData](/vext/ref/fb/charactersprintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CharacterSprintData](/vext/ref/fb/charactersprintdata). |

## Properties
### {{% prop-heading "sprintPowerDecreasePerSecond" %}}
> **float**

### {{% prop-heading "sprintPowerIncreasePerSecond" %}}
> **float**

### {{% prop-heading "sprintMinimumPower" %}}
> **float**

### {{% prop-heading "allowContinousSprinting" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterSprintData](/vext/ref/fb/charactersprintdata) type.

