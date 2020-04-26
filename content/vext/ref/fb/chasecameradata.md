---
title: ChaseCameraData
---

Inherits from 
[TargetCameraData](/vext/ref/fb/targetcameradata)

## Summary
### Constructors
| |
| ----------- |
| **[ChaseCameraData](#constructor-0)**() |
| **[ChaseCameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ChaseCameraData](#constructor-2)**(other: [TargetCameraData](/vext/ref/fb/targetcameradata)) |
| **[ChaseCameraData](#constructor-3)**(other: [CameraData](/vext/ref/fb/cameradata)) |
| **[ChaseCameraData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ChaseCameraData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ChaseCameraData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "targetOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "toWantedPositionScale" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "awayFromTargetForceScale" >}} | float |
| {{< prop "targetRotationOffset" >}} | float |
| {{< prop "maxViewRotationAngleDeg" >}} | float |
| {{< prop "wantedAngleDeg" >}} | float |
| {{< prop "wantedDistance" >}} | float |
| {{< prop "maxDistance" >}} | float |
| {{< prop "snapDistance" >}} | float |
| {{< prop "forceFieldRadius" >}} | float |
| {{< prop "collisionRadius" >}} | float |
| {{< prop "forceFieldForceScale" >}} | float |
| {{< prop "maxVelocity" >}} | float |
| {{< prop "velocityDrag" >}} | float |
| {{< prop "pillExpandSizeSpeedAcceleration" >}} | float |
| {{< prop "pillMinimumCollisionRadius" >}} | float |
| {{< prop "pillMaximumCollisionRadius" >}} | float |
| {{< prop "pillMinimumCollisionLength" >}} | float |
| {{< prop "lookDistanceScale" >}} | float |
| {{< prop "lookDistanceInFrontOfTarget" >}} | float |
| {{< prop "updateRate" >}} | int |
| {{< prop "keepTargetPitch" >}} | bool |
| {{< prop "inheritTargetVelocity" >}} | bool |
| {{< prop "shouldRollWithTarget" >}} | bool |
| {{< prop "hasCollision" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ChaseCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ChaseCameraData {#constructor-0}
> **ChaseCameraData**()

Creates a new [ChaseCameraData](/vext/ref/fb/chasecameradata) frostbite instance.

### ChaseCameraData {#constructor-1}
> **ChaseCameraData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ChaseCameraData](/vext/ref/fb/chasecameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ChaseCameraData {#constructor-2}
> **ChaseCameraData**(other: [TargetCameraData](/vext/ref/fb/targetcameradata))

Casts an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata) to [ChaseCameraData](/vext/ref/fb/chasecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TargetCameraData](/vext/ref/fb/targetcameradata) | The instance to cast to [ChaseCameraData](/vext/ref/fb/chasecameradata). |

### ChaseCameraData {#constructor-3}
> **ChaseCameraData**(other: [CameraData](/vext/ref/fb/cameradata))

Casts an instance of type [CameraData](/vext/ref/fb/cameradata) to [ChaseCameraData](/vext/ref/fb/chasecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CameraData](/vext/ref/fb/cameradata) | The instance to cast to [ChaseCameraData](/vext/ref/fb/chasecameradata). |

### ChaseCameraData {#constructor-4}
> **ChaseCameraData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ChaseCameraData](/vext/ref/fb/chasecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ChaseCameraData](/vext/ref/fb/chasecameradata). |

### ChaseCameraData {#constructor-5}
> **ChaseCameraData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ChaseCameraData](/vext/ref/fb/chasecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ChaseCameraData](/vext/ref/fb/chasecameradata). |

### ChaseCameraData {#constructor-6}
> **ChaseCameraData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChaseCameraData](/vext/ref/fb/chasecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ChaseCameraData](/vext/ref/fb/chasecameradata). |

## Properties
### {{% prop-heading "targetOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "toWantedPositionScale" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "awayFromTargetForceScale" %}}
> **float**

### {{% prop-heading "targetRotationOffset" %}}
> **float**

### {{% prop-heading "maxViewRotationAngleDeg" %}}
> **float**

### {{% prop-heading "wantedAngleDeg" %}}
> **float**

### {{% prop-heading "wantedDistance" %}}
> **float**

### {{% prop-heading "maxDistance" %}}
> **float**

### {{% prop-heading "snapDistance" %}}
> **float**

### {{% prop-heading "forceFieldRadius" %}}
> **float**

### {{% prop-heading "collisionRadius" %}}
> **float**

### {{% prop-heading "forceFieldForceScale" %}}
> **float**

### {{% prop-heading "maxVelocity" %}}
> **float**

### {{% prop-heading "velocityDrag" %}}
> **float**

### {{% prop-heading "pillExpandSizeSpeedAcceleration" %}}
> **float**

### {{% prop-heading "pillMinimumCollisionRadius" %}}
> **float**

### {{% prop-heading "pillMaximumCollisionRadius" %}}
> **float**

### {{% prop-heading "pillMinimumCollisionLength" %}}
> **float**

### {{% prop-heading "lookDistanceScale" %}}
> **float**

### {{% prop-heading "lookDistanceInFrontOfTarget" %}}
> **float**

### {{% prop-heading "updateRate" %}}
> **int**

### {{% prop-heading "keepTargetPitch" %}}
> **bool**

### {{% prop-heading "inheritTargetVelocity" %}}
> **bool**

### {{% prop-heading "shouldRollWithTarget" %}}
> **bool**

### {{% prop-heading "hasCollision" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ChaseCameraData](/vext/ref/fb/chasecameradata) type.

