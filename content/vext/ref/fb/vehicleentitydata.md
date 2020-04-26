---
title: VehicleEntityData
---

Inherits from [ControllableEntityData](/vext/ref/fb/controllableentitydata)

## Summary

### Constructors

|  |
| --- |
| **[VehicleEntityData](#constructor-0)**() |
| **[VehicleEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleEntityData](#constructor-2)**(other: [ControllableEntityData](/vext/ref/fb/controllableentitydata)) |
| **[VehicleEntityData](#constructor-3)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[VehicleEntityData](#constructor-4)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[VehicleEntityData](#constructor-5)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[VehicleEntityData](#constructor-6)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[VehicleEntityData](#constructor-7)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VehicleEntityData](#constructor-8)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VehicleEntityData](#constructor-9)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "criticallyDamagedEffectPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "flirKeyColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "preExplosionEffectPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "interactionOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "disabledDamageThreshold" >}} | float |
| {{< prop "controllableType" >}} | string |
| {{< prop "preDestructionDamageThreshold" >}} | float |
| {{< prop "rearHealthZone" >}} | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) |
| {{< prop "leftHealthZone" >}} | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) |
| {{< prop "rightHealthZone" >}} | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) |
| {{< prop "minSpeedForMineActivation" >}} | float |
| {{< prop "frontHealthZone" >}} | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) |
| {{< prop "upsideDownDamage" >}} | float |
| {{< prop "waterDamageOffset" >}} | float |
| {{< prop "armorMultiplier" >}} | float |
| {{< prop "regenerationDelayMultiplier" >}} | float |
| {{< prop "regenerationRateMultiplier" >}} | float |
| {{< prop "emergencyRepairHealth" >}} | float |
| {{< prop "decayDelay" >}} | float |
| {{< prop "decayRate" >}} | float |
| {{< prop "belowWaterDamageDelay" >}} | float |
| {{< prop "criticallyDamagedEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "regenerationRate" >}} | float |
| {{< prop "criticalDamageTime" >}} | float |
| {{< prop "preExplosionEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "regenerationDelay" >}} | float |
| {{< prop "preExplosionTime" >}} | float |
| {{< prop "explosion" >}} | [ExplosionEntityData](/vext/ref/fb/explosionentitydata) \| nil |
| {{< prop "mesh" >}} | [CompositeMeshAsset](/vext/ref/fb/compositemeshasset) \| nil |
| {{< prop "cockpitMesh" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "velocityDamageMagnifier" >}} | float |
| {{< prop "exitSpeedThreshold" >}} | float |
| {{< prop "hudData" >}} | [VehicleHudData](/vext/ref/fb/vehiclehuddata) |
| {{< prop "nameSid" >}} | string |
| {{< prop "maxPlayersInVehicle" >}} | int |
| {{< prop "nametagHeightScale" >}} | float |
| {{< prop "sound" >}} | [VehicleSoundData](/vext/ref/fb/vehiclesounddata) \| nil |
| {{< prop "upsideDownDamageDelay" >}} | float |
| {{< prop "upsideDownAngle" >}} | float |
| {{< prop "waterDamage" >}} | float |
| {{< prop "lockingTimeMultiplier" >}} | float |
| {{< prop "nametagHeightOffset" >}} | float |
| {{< prop "highAltitudeLockHeight" >}} | float |
| {{< prop "velocityDamageThreshold" >}} | float |
| {{< prop "voiceOverInfo" >}} | [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo) \| nil |
| {{< prop "exitCameraSwitchDelay" >}} | float |
| {{< prop "killSoldierCollisionSpeedThreshold" >}} | float |
| {{< prop "exitDirectionSpeedThreshold" >}} | float |
| {{< prop "angleOfImpact" >}} | [AngleOfImpactData](/vext/ref/fb/angleofimpactdata) |
| {{< prop "vehicleLockableInfo" >}} | [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata) |
| {{< prop "flirValue" >}} | float |
| {{< prop "mpMode" >}} | [MPModeData](/vext/ref/fb/mpmodedata) |
| {{< prop "ignoreSoldierCollisionNormal" >}} | bool |
| {{< prop "showPlayerHealth" >}} | bool |
| {{< prop "foregroundRenderCockpitMesh" >}} | bool |
| {{< prop "renderVehicleMesh" >}} | bool |
| {{< prop "isAffectedByEMP" >}} | bool |
| {{< prop "throwOutSoldierInsideOnWaterDamage" >}} | bool |
| {{< prop "useAsTeamSpawner" >}} | bool |
| {{< prop "isLockable" >}} | bool |
| {{< prop "choseExitPointByDirection" >}} | bool |
| {{< prop "healthZonesShareDamage" >}} | bool |
| {{< prop "neverReportVehicleAsEmpty" >}} | bool |
| {{< prop "exitAllowed" >}} | bool |
| {{< prop "useLowAltitudeHeatSignature" >}} | bool |
| {{< prop "allowVehicleOutsideCombatAreas" >}} | bool |
| {{< prop "enableGroundmapLighting" >}} | bool |
| {{< prop "motionBlurMask" >}} | bool |
| {{< prop "useProtectedShields" >}} | bool |
| {{< prop "useDriverEyePosForNametagPos" >}} | bool |
| {{< prop "equipmentFakeVehicle" >}} | bool |
| {{< prop "explosionPacksAttachable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleEntityData {#constructor-0}

> **VehicleEntityData**()

Creates a new [VehicleEntityData](/vext/ref/fb/vehicleentitydata) frostbite instance.

### VehicleEntityData {#constructor-1}

> **VehicleEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleEntityData](/vext/ref/fb/vehicleentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleEntityData {#constructor-2}

> **VehicleEntityData**(other: [ControllableEntityData](/vext/ref/fb/controllableentitydata))

Casts an instance of type [ControllableEntityData](/vext/ref/fb/controllableentitydata) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ControllableEntityData](/vext/ref/fb/controllableentitydata) | The instance to cast to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). |

### VehicleEntityData {#constructor-3}

> **VehicleEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). |

### VehicleEntityData {#constructor-4}

> **VehicleEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). |

### VehicleEntityData {#constructor-5}

> **VehicleEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). |

### VehicleEntityData {#constructor-6}

> **VehicleEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). |

### VehicleEntityData {#constructor-7}

> **VehicleEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). |

### VehicleEntityData {#constructor-8}

> **VehicleEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). |

### VehicleEntityData {#constructor-9}

> **VehicleEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleEntityData](/vext/ref/fb/vehicleentitydata). |

## Properties

### {{% prop-heading "criticallyDamagedEffectPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "flirKeyColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "preExplosionEffectPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "interactionOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "disabledDamageThreshold" %}}

> **float**

### {{% prop-heading "controllableType" %}}

> **string**

### {{% prop-heading "preDestructionDamageThreshold" %}}

> **float**

### {{% prop-heading "rearHealthZone" %}}

> **[VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata)**

### {{% prop-heading "leftHealthZone" %}}

> **[VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata)**

### {{% prop-heading "rightHealthZone" %}}

> **[VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata)**

### {{% prop-heading "minSpeedForMineActivation" %}}

> **float**

### {{% prop-heading "frontHealthZone" %}}

> **[VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata)**

### {{% prop-heading "upsideDownDamage" %}}

> **float**

### {{% prop-heading "waterDamageOffset" %}}

> **float**

### {{% prop-heading "armorMultiplier" %}}

> **float**

### {{% prop-heading "regenerationDelayMultiplier" %}}

> **float**

### {{% prop-heading "regenerationRateMultiplier" %}}

> **float**

### {{% prop-heading "emergencyRepairHealth" %}}

> **float**

### {{% prop-heading "decayDelay" %}}

> **float**

### {{% prop-heading "decayRate" %}}

> **float**

### {{% prop-heading "belowWaterDamageDelay" %}}

> **float**

### {{% prop-heading "criticallyDamagedEffect" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** \| **nil**

### {{% prop-heading "regenerationRate" %}}

> **float**

### {{% prop-heading "criticalDamageTime" %}}

> **float**

### {{% prop-heading "preExplosionEffect" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** \| **nil**

### {{% prop-heading "regenerationDelay" %}}

> **float**

### {{% prop-heading "preExplosionTime" %}}

> **float**

### {{% prop-heading "explosion" %}}

> **[ExplosionEntityData](/vext/ref/fb/explosionentitydata)** \| **nil**

### {{% prop-heading "mesh" %}}

> **[CompositeMeshAsset](/vext/ref/fb/compositemeshasset)** \| **nil**

### {{% prop-heading "cockpitMesh" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** \| **nil**

### {{% prop-heading "velocityDamageMagnifier" %}}

> **float**

### {{% prop-heading "exitSpeedThreshold" %}}

> **float**

### {{% prop-heading "hudData" %}}

> **[VehicleHudData](/vext/ref/fb/vehiclehuddata)**

### {{% prop-heading "nameSid" %}}

> **string**

### {{% prop-heading "maxPlayersInVehicle" %}}

> **int**

### {{% prop-heading "nametagHeightScale" %}}

> **float**

### {{% prop-heading "sound" %}}

> **[VehicleSoundData](/vext/ref/fb/vehiclesounddata)** \| **nil**

### {{% prop-heading "upsideDownDamageDelay" %}}

> **float**

### {{% prop-heading "upsideDownAngle" %}}

> **float**

### {{% prop-heading "waterDamage" %}}

> **float**

### {{% prop-heading "lockingTimeMultiplier" %}}

> **float**

### {{% prop-heading "nametagHeightOffset" %}}

> **float**

### {{% prop-heading "highAltitudeLockHeight" %}}

> **float**

### {{% prop-heading "velocityDamageThreshold" %}}

> **float**

### {{% prop-heading "voiceOverInfo" %}}

> **[EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo)** \| **nil**

### {{% prop-heading "exitCameraSwitchDelay" %}}

> **float**

### {{% prop-heading "killSoldierCollisionSpeedThreshold" %}}

> **float**

### {{% prop-heading "exitDirectionSpeedThreshold" %}}

> **float**

### {{% prop-heading "angleOfImpact" %}}

> **[AngleOfImpactData](/vext/ref/fb/angleofimpactdata)**

### {{% prop-heading "vehicleLockableInfo" %}}

> **[VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata)**

### {{% prop-heading "flirValue" %}}

> **float**

### {{% prop-heading "mpMode" %}}

> **[MPModeData](/vext/ref/fb/mpmodedata)**

### {{% prop-heading "ignoreSoldierCollisionNormal" %}}

> **bool**

### {{% prop-heading "showPlayerHealth" %}}

> **bool**

### {{% prop-heading "foregroundRenderCockpitMesh" %}}

> **bool**

### {{% prop-heading "renderVehicleMesh" %}}

> **bool**

### {{% prop-heading "isAffectedByEMP" %}}

> **bool**

### {{% prop-heading "throwOutSoldierInsideOnWaterDamage" %}}

> **bool**

### {{% prop-heading "useAsTeamSpawner" %}}

> **bool**

### {{% prop-heading "isLockable" %}}

> **bool**

### {{% prop-heading "choseExitPointByDirection" %}}

> **bool**

### {{% prop-heading "healthZonesShareDamage" %}}

> **bool**

### {{% prop-heading "neverReportVehicleAsEmpty" %}}

> **bool**

### {{% prop-heading "exitAllowed" %}}

> **bool**

### {{% prop-heading "useLowAltitudeHeatSignature" %}}

> **bool**

### {{% prop-heading "allowVehicleOutsideCombatAreas" %}}

> **bool**

### {{% prop-heading "enableGroundmapLighting" %}}

> **bool**

### {{% prop-heading "motionBlurMask" %}}

> **bool**

### {{% prop-heading "useProtectedShields" %}}

> **bool**

### {{% prop-heading "useDriverEyePosForNametagPos" %}}

> **bool**

### {{% prop-heading "equipmentFakeVehicle" %}}

> **bool**

### {{% prop-heading "explosionPacksAttachable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleEntityData](/vext/ref/fb/vehicleentitydata) type.

