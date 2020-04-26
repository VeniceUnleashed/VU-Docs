---
title: FollowConstantData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[FollowConstantData](#constructor-0)**() |
| **[FollowConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FollowConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[FollowConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "distanceFromPlayerBeforeTeleport" >}} | float |
| {{< prop "followHumanMaxDistance" >}} | float |
| {{< prop "followHumanInCombatMaxDistance" >}} | float |
| {{< prop "followAiMaxDistance" >}} | float |
| {{< prop "followAiInCombatMaxDistance" >}} | float |
| {{< prop "followMimicPoseDistance" >}} | float |
| {{< prop "followInertia" >}} | float |
| {{< prop "lookAwayAngle" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FollowConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FollowConstantData {#constructor-0}
> **FollowConstantData**()

Creates a new [FollowConstantData](/vext/ref/fb/followconstantdata) frostbite instance.

### FollowConstantData {#constructor-1}
> **FollowConstantData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FollowConstantData](/vext/ref/fb/followconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FollowConstantData {#constructor-2}
> **FollowConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [FollowConstantData](/vext/ref/fb/followconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [FollowConstantData](/vext/ref/fb/followconstantdata). |

### FollowConstantData {#constructor-3}
> **FollowConstantData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowConstantData](/vext/ref/fb/followconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FollowConstantData](/vext/ref/fb/followconstantdata). |

## Properties
### {{% prop-heading "distanceFromPlayerBeforeTeleport" %}}
> **float**

### {{% prop-heading "followHumanMaxDistance" %}}
> **float**

### {{% prop-heading "followHumanInCombatMaxDistance" %}}
> **float**

### {{% prop-heading "followAiMaxDistance" %}}
> **float**

### {{% prop-heading "followAiInCombatMaxDistance" %}}
> **float**

### {{% prop-heading "followMimicPoseDistance" %}}
> **float**

### {{% prop-heading "followInertia" %}}
> **float**

### {{% prop-heading "lookAwayAngle" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FollowConstantData](/vext/ref/fb/followconstantdata) type.

