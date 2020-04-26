---
title: PlayerCameraEntityData
---

Inherits from [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata)

## Summary

### Constructors

|  |
| --- |
| **[PlayerCameraEntityData](#constructor-0)**() |
| **[PlayerCameraEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PlayerCameraEntityData](#constructor-2)**(other: [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata)) |
| **[PlayerCameraEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[PlayerCameraEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PlayerCameraEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PlayerCameraEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PlayerCameraEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "soldierTargetMode" >}} | [TargetMode](/vext/ref/fb/targetmode) |
| {{< prop "soldierCameraIndex" >}} | int |
| {{< prop "vehicleTargetMode" >}} | [TargetMode](/vext/ref/fb/targetmode) |
| {{< prop "vehicleCameraIndex" >}} | int |
| {{< prop "releaseControlIfTargetLost" >}} | bool |
| {{< prop "shouldTargetControllable" >}} | bool |
| {{< prop "shouldTargetVehicleDriverEntry" >}} | bool |
| {{< prop "shouldTargetExtraPlayerInDoublePlayerEvent" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PlayerCameraEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PlayerCameraEntityData {#constructor-0}

> **PlayerCameraEntityData**()

Creates a new [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata) frostbite instance.

### PlayerCameraEntityData {#constructor-1}

> **PlayerCameraEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PlayerCameraEntityData {#constructor-2}

> **PlayerCameraEntityData**(other: [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata))

Casts an instance of type [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata) | The instance to cast to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). |

### PlayerCameraEntityData {#constructor-3}

> **PlayerCameraEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). |

### PlayerCameraEntityData {#constructor-4}

> **PlayerCameraEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). |

### PlayerCameraEntityData {#constructor-5}

> **PlayerCameraEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). |

### PlayerCameraEntityData {#constructor-6}

> **PlayerCameraEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). |

### PlayerCameraEntityData {#constructor-7}

> **PlayerCameraEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata). |

## Properties

### {{% prop-heading "soldierTargetMode" %}}

> **[TargetMode](/vext/ref/fb/targetmode)**

### {{% prop-heading "soldierCameraIndex" %}}

> **int**

### {{% prop-heading "vehicleTargetMode" %}}

> **[TargetMode](/vext/ref/fb/targetmode)**

### {{% prop-heading "vehicleCameraIndex" %}}

> **int**

### {{% prop-heading "releaseControlIfTargetLost" %}}

> **bool**

### {{% prop-heading "shouldTargetControllable" %}}

> **bool**

### {{% prop-heading "shouldTargetVehicleDriverEntry" %}}

> **bool**

### {{% prop-heading "shouldTargetExtraPlayerInDoublePlayerEvent" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata) type.

