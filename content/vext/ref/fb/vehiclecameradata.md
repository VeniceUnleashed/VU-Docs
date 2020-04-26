---
title: VehicleCameraData
---

Inherits from 
[TargetCameraData](/vext/ref/fb/targetcameradata)

## Summary
### Constructors
| |
| ----------- |
| **[VehicleCameraData](#constructor-0)**() |
| **[VehicleCameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VehicleCameraData](#constructor-2)**(other: [TargetCameraData](/vext/ref/fb/targetcameradata)) |
| **[VehicleCameraData](#constructor-3)**(other: [CameraData](/vext/ref/fb/cameradata)) |
| **[VehicleCameraData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VehicleCameraData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VehicleCameraData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "moveToPosition" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "moveToPositionSlopeFactor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "targetOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "targetOffsetSlopeFactor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "rotationFactor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "positionFactor" >}} | float |
| {{< prop "resetDistance" >}} | float |
| {{< prop "fixedPosition" >}} | bool |
| {{< prop "fixedAngleZ" >}} | bool |
| {{< prop "useTerrainAdjustment" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleCameraData {#constructor-0}
> **VehicleCameraData**()

Creates a new [VehicleCameraData](/vext/ref/fb/vehiclecameradata) frostbite instance.

### VehicleCameraData {#constructor-1}
> **VehicleCameraData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VehicleCameraData](/vext/ref/fb/vehiclecameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VehicleCameraData {#constructor-2}
> **VehicleCameraData**(other: [TargetCameraData](/vext/ref/fb/targetcameradata))

Casts an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TargetCameraData](/vext/ref/fb/targetcameradata) | The instance to cast to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). |

### VehicleCameraData {#constructor-3}
> **VehicleCameraData**(other: [CameraData](/vext/ref/fb/cameradata))

Casts an instance of type [CameraData](/vext/ref/fb/cameradata) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CameraData](/vext/ref/fb/cameradata) | The instance to cast to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). |

### VehicleCameraData {#constructor-4}
> **VehicleCameraData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). |

### VehicleCameraData {#constructor-5}
> **VehicleCameraData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). |

### VehicleCameraData {#constructor-6}
> **VehicleCameraData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VehicleCameraData](/vext/ref/fb/vehiclecameradata). |

## Properties
### {{% prop-heading "moveToPosition" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "moveToPositionSlopeFactor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "targetOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "targetOffsetSlopeFactor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "rotationFactor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "positionFactor" %}}
> **float**

### {{% prop-heading "resetDistance" %}}
> **float**

### {{% prop-heading "fixedPosition" %}}
> **bool**

### {{% prop-heading "fixedAngleZ" %}}
> **bool**

### {{% prop-heading "useTerrainAdjustment" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleCameraData](/vext/ref/fb/vehiclecameradata) type.

