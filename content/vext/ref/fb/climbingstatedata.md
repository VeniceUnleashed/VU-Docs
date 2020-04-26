---
title: ClimbingStateData
---

Inherits from 
[CharacterStateData](/vext/ref/fb/characterstatedata)

## Summary
### Constructors
| |
| ----------- |
| **[ClimbingStateData](#constructor-0)**() |
| **[ClimbingStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ClimbingStateData](#constructor-2)**(other: [CharacterStateData](/vext/ref/fb/characterstatedata)) |
| **[ClimbingStateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lateralInputScale" >}} | float |
| {{< prop "downAngleLimit" >}} | float |
| {{< prop "dropOffAngle" >}} | float |
| {{< prop "attractionVelocity" >}} | float |
| {{< prop "pushAwayVelocity" >}} | float |
| {{< prop "climbHeightOffset" >}} | float |
| {{< prop "climbOffVerticalDistance" >}} | float |
| {{< prop "climbOffVerticalTime" >}} | float |
| {{< prop "climbOffHorizontalDistance" >}} | float |
| {{< prop "climbOffHorizontalTime" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ClimbingStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ClimbingStateData {#constructor-0}
> **ClimbingStateData**()

Creates a new [ClimbingStateData](/vext/ref/fb/climbingstatedata) frostbite instance.

### ClimbingStateData {#constructor-1}
> **ClimbingStateData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ClimbingStateData](/vext/ref/fb/climbingstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ClimbingStateData {#constructor-2}
> **ClimbingStateData**(other: [CharacterStateData](/vext/ref/fb/characterstatedata))

Casts an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata) to [ClimbingStateData](/vext/ref/fb/climbingstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterStateData](/vext/ref/fb/characterstatedata) | The instance to cast to [ClimbingStateData](/vext/ref/fb/climbingstatedata). |

### ClimbingStateData {#constructor-3}
> **ClimbingStateData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClimbingStateData](/vext/ref/fb/climbingstatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ClimbingStateData](/vext/ref/fb/climbingstatedata). |

## Properties
### {{% prop-heading "lateralInputScale" %}}
> **float**

### {{% prop-heading "downAngleLimit" %}}
> **float**

### {{% prop-heading "dropOffAngle" %}}
> **float**

### {{% prop-heading "attractionVelocity" %}}
> **float**

### {{% prop-heading "pushAwayVelocity" %}}
> **float**

### {{% prop-heading "climbHeightOffset" %}}
> **float**

### {{% prop-heading "climbOffVerticalDistance" %}}
> **float**

### {{% prop-heading "climbOffVerticalTime" %}}
> **float**

### {{% prop-heading "climbOffHorizontalDistance" %}}
> **float**

### {{% prop-heading "climbOffHorizontalTime" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ClimbingStateData](/vext/ref/fb/climbingstatedata) type.

