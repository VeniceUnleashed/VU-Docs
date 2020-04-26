---
title: WingPhysicsData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[WingPhysicsData](#constructor-0)**() |
| **[WingPhysicsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WingPhysicsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lift" >}} | float |
| {{< prop "flapLift" >}} | float |
| {{< prop "liftCoefficient" >}} | [Curve2D](/vext/ref/fb/curve2d) \| nil |
| {{< prop "drag" >}} | float |
| {{< prop "flapDrag" >}} | float |
| {{< prop "dragCoefficient" >}} | [Curve2D](/vext/ref/fb/curve2d) \| nil |
| {{< prop "angularVelocityLiftModifier" >}} | float |
| {{< prop "dragRotationModifier" >}} | float |
| {{< prop "baseAngleOfAttack" >}} | float |
| {{< prop "inputForFlap" >}} | int |
| {{< prop "flapTurnSpeed" >}} | float |
| {{< prop "visualFlapTurnSpeed" >}} | float |
| {{< prop "visualFlapAngleLimit" >}} | float |
| {{< prop "maxFlapAngleScaleFactor" >}} | [Curve2D](/vext/ref/fb/curve2d) \| nil |
| {{< prop "landingFlapLift" >}} | float |
| {{< prop "landingFlapLogic" >}} | [LandingFlapData](/vext/ref/fb/landingflapdata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WingPhysicsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WingPhysicsData {#constructor-0}
> **WingPhysicsData**()

Creates a new [WingPhysicsData](/vext/ref/fb/wingphysicsdata) frostbite instance.

### WingPhysicsData {#constructor-1}
> **WingPhysicsData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WingPhysicsData](/vext/ref/fb/wingphysicsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WingPhysicsData {#constructor-2}
> **WingPhysicsData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WingPhysicsData](/vext/ref/fb/wingphysicsdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WingPhysicsData](/vext/ref/fb/wingphysicsdata). |

## Properties
### {{% prop-heading "lift" %}}
> **float**

### {{% prop-heading "flapLift" %}}
> **float**

### {{% prop-heading "liftCoefficient" %}}
> **[Curve2D](/vext/ref/fb/curve2d)** | **nil**

### {{% prop-heading "drag" %}}
> **float**

### {{% prop-heading "flapDrag" %}}
> **float**

### {{% prop-heading "dragCoefficient" %}}
> **[Curve2D](/vext/ref/fb/curve2d)** | **nil**

### {{% prop-heading "angularVelocityLiftModifier" %}}
> **float**

### {{% prop-heading "dragRotationModifier" %}}
> **float**

### {{% prop-heading "baseAngleOfAttack" %}}
> **float**

### {{% prop-heading "inputForFlap" %}}
> **int**

### {{% prop-heading "flapTurnSpeed" %}}
> **float**

### {{% prop-heading "visualFlapTurnSpeed" %}}
> **float**

### {{% prop-heading "visualFlapAngleLimit" %}}
> **float**

### {{% prop-heading "maxFlapAngleScaleFactor" %}}
> **[Curve2D](/vext/ref/fb/curve2d)** | **nil**

### {{% prop-heading "landingFlapLift" %}}
> **float**

### {{% prop-heading "landingFlapLogic" %}}
> **[LandingFlapData](/vext/ref/fb/landingflapdata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WingPhysicsData](/vext/ref/fb/wingphysicsdata) type.

