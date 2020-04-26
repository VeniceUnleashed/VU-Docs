---
title: SubWorldInclusionSetting
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SubWorldInclusionSetting](#constructor-0)**() |
| **[SubWorldInclusionSetting](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SubWorldInclusionSetting](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "criterion" >}} | [SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion) \| nil |
| {{< prop "enabledOptions" >}} | string[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SubWorldInclusionSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SubWorldInclusionSetting {#constructor-0}
> **SubWorldInclusionSetting**()

Creates a new [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting) frostbite instance.

### SubWorldInclusionSetting {#constructor-1}
> **SubWorldInclusionSetting**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SubWorldInclusionSetting {#constructor-2}
> **SubWorldInclusionSetting**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting). |

## Properties
### {{% prop-heading "criterion" %}}
> **[SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion)** | **nil**

### {{% prop-heading "enabledOptions" %}}
> **string**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting) type.

