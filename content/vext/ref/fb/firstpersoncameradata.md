---
title: FirstPersonCameraData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[FirstPersonCameraData](#constructor-0)**() |
| **[FirstPersonCameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FirstPersonCameraData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "offset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "weaponBaseOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "weaponLagRotationOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "rotation" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "weaponSpringEffect" >}} | [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata) \| nil |
| {{< prop "cameraSpringEffect" >}} | [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata) \| nil |
| {{< prop "moveStrafeModifier" >}} | float |
| {{< prop "moveForwardModifier" >}} | float |
| {{< prop "rotateYawModifier" >}} | float |
| {{< prop "rotatePitchModifier" >}} | float |
| {{< prop "rotateRollModifier" >}} | float |
| {{< prop "zoomMoveStrafeModifier" >}} | float |
| {{< prop "zoomMoveForwardModifier" >}} | float |
| {{< prop "zoomRotateYawModifier" >}} | float |
| {{< prop "zoomRotatePitchModifier" >}} | float |
| {{< prop "zoomRotateRollModifier" >}} | float |
| {{< prop "releaseModifier" >}} | float |
| {{< prop "releaseModifierPitch" >}} | float |
| {{< prop "releaseModifierYaw" >}} | float |
| {{< prop "releaseModifierRoll" >}} | float |
| {{< prop "offsetReleaseModifier" >}} | float |
| {{< prop "zoomReleaseModifierPitch" >}} | float |
| {{< prop "zoomReleaseModifierYaw" >}} | float |
| {{< prop "zoomReleaseModifierRoll" >}} | float |
| {{< prop "zoomOffsetReleaseModifier" >}} | float |
| {{< prop "rotationAdditionToOffset" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FirstPersonCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FirstPersonCameraData {#constructor-0}
> **FirstPersonCameraData**()

Creates a new [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata) frostbite instance.

### FirstPersonCameraData {#constructor-1}
> **FirstPersonCameraData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FirstPersonCameraData {#constructor-2}
> **FirstPersonCameraData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata). |

## Properties
### {{% prop-heading "offset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "weaponBaseOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "weaponLagRotationOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "rotation" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "weaponSpringEffect" %}}
> **[WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata)** | **nil**

### {{% prop-heading "cameraSpringEffect" %}}
> **[WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata)** | **nil**

### {{% prop-heading "moveStrafeModifier" %}}
> **float**

### {{% prop-heading "moveForwardModifier" %}}
> **float**

### {{% prop-heading "rotateYawModifier" %}}
> **float**

### {{% prop-heading "rotatePitchModifier" %}}
> **float**

### {{% prop-heading "rotateRollModifier" %}}
> **float**

### {{% prop-heading "zoomMoveStrafeModifier" %}}
> **float**

### {{% prop-heading "zoomMoveForwardModifier" %}}
> **float**

### {{% prop-heading "zoomRotateYawModifier" %}}
> **float**

### {{% prop-heading "zoomRotatePitchModifier" %}}
> **float**

### {{% prop-heading "zoomRotateRollModifier" %}}
> **float**

### {{% prop-heading "releaseModifier" %}}
> **float**

### {{% prop-heading "releaseModifierPitch" %}}
> **float**

### {{% prop-heading "releaseModifierYaw" %}}
> **float**

### {{% prop-heading "releaseModifierRoll" %}}
> **float**

### {{% prop-heading "offsetReleaseModifier" %}}
> **float**

### {{% prop-heading "zoomReleaseModifierPitch" %}}
> **float**

### {{% prop-heading "zoomReleaseModifierYaw" %}}
> **float**

### {{% prop-heading "zoomReleaseModifierRoll" %}}
> **float**

### {{% prop-heading "zoomOffsetReleaseModifier" %}}
> **float**

### {{% prop-heading "rotationAdditionToOffset" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata) type.

