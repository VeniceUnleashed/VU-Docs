---
title: SoldierEntityData
---

Inherits from [CharacterEntityData](/vext/ref/fb/characterentitydata)

## Summary

### Constructors

|  |
| --- |
| **[SoldierEntityData](#constructor-0)**() |
| **[SoldierEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierEntityData](#constructor-2)**(other: [CharacterEntityData](/vext/ref/fb/characterentitydata)) |
| **[SoldierEntityData](#constructor-3)**(other: [ControllableEntityData](/vext/ref/fb/controllableentitydata)) |
| **[SoldierEntityData](#constructor-4)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[SoldierEntityData](#constructor-5)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[SoldierEntityData](#constructor-6)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[SoldierEntityData](#constructor-7)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SoldierEntityData](#constructor-8)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SoldierEntityData](#constructor-9)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoldierEntityData](#constructor-10)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "flirKeyColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "headMaterialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "boneFakePhysics" >}} | [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata)[] |
| {{< prop "autoAim" >}} | [SoldierAutoAimData](/vext/ref/fb/soldierautoaimdata) \| nil |
| {{< prop "aimingConstraints" >}} | [SoldierAimingConstraintsData](/vext/ref/fb/soldieraimingconstraintsdata) \| nil |
| {{< prop "headCollision" >}} | [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata) \| nil |
| {{< prop "characterPhysics" >}} | [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata) \| nil |
| {{< prop "footMaterialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "sprintSettings" >}} | [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata) \| nil |
| {{< prop "meshes1p" >}} | [SoldierMeshData](/vext/ref/fb/soldiermeshdata)[] |
| {{< prop "meshes3p" >}} | [SoldierMeshData](/vext/ref/fb/soldiermeshdata)[] |
| {{< prop "hidableMeshParts" >}} | [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart)[] |
| {{< prop "sound" >}} | [SoldierSoundData](/vext/ref/fb/soldiersounddata) \| nil |
| {{< prop "streamGroup1p" >}} | [StreamGroupData](/vext/ref/fb/streamgroupdata) \| nil |
| {{< prop "impulseReactionTime" >}} | float |
| {{< prop "healthModule" >}} | [SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata) \| nil |
| {{< prop "maxHealth" >}} | float |
| {{< prop "collisionInfo" >}} | [CollisionData](/vext/ref/fb/collisiondata) \| nil |
| {{< prop "voiceOverInfo" >}} | [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo) \| nil |
| {{< prop "flirValue" >}} | float |
| {{< prop "breathControl" >}} | [BreathControlData](/vext/ref/fb/breathcontroldata)[] |
| {{< prop "explosionDamageModifier" >}} | float |
| {{< prop "uiParts" >}} | [UIPartData](/vext/ref/fb/uipartdata)[] |
| {{< prop "regenerationDelayModifier" >}} | float |
| {{< prop "freeSpaceCheck" >}} | bool |
| {{< prop "proximityCheck" >}} | bool |
| {{< prop "enableGroundmapLighting" >}} | bool |
| {{< prop "showWeaponWhenDead" >}} | bool |
| {{< prop "lowerGunOnOwnTeam" >}} | bool |
| {{< prop "useSpineXRotation" >}} | bool |
| {{< prop "collisionEnabled" >}} | bool |
| {{< prop "physicsControlled" >}} | bool |
| {{< prop "isPushable" >}} | bool |
| {{< prop "humanPlayerControlled" >}} | bool |
| {{< prop "interactiveManDownAllowed" >}} | bool |
| {{< prop "showNametag" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierEntityData {#constructor-0}

> **SoldierEntityData**()

Creates a new [SoldierEntityData](/vext/ref/fb/soldierentitydata) frostbite instance.

### SoldierEntityData {#constructor-1}

> **SoldierEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierEntityData](/vext/ref/fb/soldierentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierEntityData {#constructor-2}

> **SoldierEntityData**(other: [CharacterEntityData](/vext/ref/fb/characterentitydata))

Casts an instance of type [CharacterEntityData](/vext/ref/fb/characterentitydata) to [SoldierEntityData](/vext/ref/fb/soldierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterEntityData](/vext/ref/fb/characterentitydata) | The instance to cast to [SoldierEntityData](/vext/ref/fb/soldierentitydata). |

### SoldierEntityData {#constructor-3}

> **SoldierEntityData**(other: [ControllableEntityData](/vext/ref/fb/controllableentitydata))

Casts an instance of type [ControllableEntityData](/vext/ref/fb/controllableentitydata) to [SoldierEntityData](/vext/ref/fb/soldierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ControllableEntityData](/vext/ref/fb/controllableentitydata) | The instance to cast to [SoldierEntityData](/vext/ref/fb/soldierentitydata). |

### SoldierEntityData {#constructor-4}

> **SoldierEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [SoldierEntityData](/vext/ref/fb/soldierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [SoldierEntityData](/vext/ref/fb/soldierentitydata). |

### SoldierEntityData {#constructor-5}

> **SoldierEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [SoldierEntityData](/vext/ref/fb/soldierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [SoldierEntityData](/vext/ref/fb/soldierentitydata). |

### SoldierEntityData {#constructor-6}

> **SoldierEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [SoldierEntityData](/vext/ref/fb/soldierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [SoldierEntityData](/vext/ref/fb/soldierentitydata). |

### SoldierEntityData {#constructor-7}

> **SoldierEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SoldierEntityData](/vext/ref/fb/soldierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SoldierEntityData](/vext/ref/fb/soldierentitydata). |

### SoldierEntityData {#constructor-8}

> **SoldierEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SoldierEntityData](/vext/ref/fb/soldierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SoldierEntityData](/vext/ref/fb/soldierentitydata). |

### SoldierEntityData {#constructor-9}

> **SoldierEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoldierEntityData](/vext/ref/fb/soldierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoldierEntityData](/vext/ref/fb/soldierentitydata). |

### SoldierEntityData {#constructor-10}

> **SoldierEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierEntityData](/vext/ref/fb/soldierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierEntityData](/vext/ref/fb/soldierentitydata). |

## Properties

### {{% prop-heading "flirKeyColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "headMaterialPair" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "boneFakePhysics" %}}

> **[BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata)**[]

### {{% prop-heading "autoAim" %}}

> **[SoldierAutoAimData](/vext/ref/fb/soldierautoaimdata)** \| **nil**

### {{% prop-heading "aimingConstraints" %}}

> **[SoldierAimingConstraintsData](/vext/ref/fb/soldieraimingconstraintsdata)** \| **nil**

### {{% prop-heading "headCollision" %}}

> **[SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata)** \| **nil**

### {{% prop-heading "characterPhysics" %}}

> **[CharacterPhysicsData](/vext/ref/fb/characterphysicsdata)** \| **nil**

### {{% prop-heading "footMaterialPair" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "sprintSettings" %}}

> **[SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata)** \| **nil**

### {{% prop-heading "meshes1p" %}}

> **[SoldierMeshData](/vext/ref/fb/soldiermeshdata)**[]

### {{% prop-heading "meshes3p" %}}

> **[SoldierMeshData](/vext/ref/fb/soldiermeshdata)**[]

### {{% prop-heading "hidableMeshParts" %}}

> **[HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart)**[]

### {{% prop-heading "sound" %}}

> **[SoldierSoundData](/vext/ref/fb/soldiersounddata)** \| **nil**

### {{% prop-heading "streamGroup1p" %}}

> **[StreamGroupData](/vext/ref/fb/streamgroupdata)** \| **nil**

### {{% prop-heading "impulseReactionTime" %}}

> **float**

### {{% prop-heading "healthModule" %}}

> **[SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata)** \| **nil**

### {{% prop-heading "maxHealth" %}}

> **float**

### {{% prop-heading "collisionInfo" %}}

> **[CollisionData](/vext/ref/fb/collisiondata)** \| **nil**

### {{% prop-heading "voiceOverInfo" %}}

> **[EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo)** \| **nil**

### {{% prop-heading "flirValue" %}}

> **float**

### {{% prop-heading "breathControl" %}}

> **[BreathControlData](/vext/ref/fb/breathcontroldata)**[]

### {{% prop-heading "explosionDamageModifier" %}}

> **float**

### {{% prop-heading "uiParts" %}}

> **[UIPartData](/vext/ref/fb/uipartdata)**[]

### {{% prop-heading "regenerationDelayModifier" %}}

> **float**

### {{% prop-heading "freeSpaceCheck" %}}

> **bool**

### {{% prop-heading "proximityCheck" %}}

> **bool**

### {{% prop-heading "enableGroundmapLighting" %}}

> **bool**

### {{% prop-heading "showWeaponWhenDead" %}}

> **bool**

### {{% prop-heading "lowerGunOnOwnTeam" %}}

> **bool**

### {{% prop-heading "useSpineXRotation" %}}

> **bool**

### {{% prop-heading "collisionEnabled" %}}

> **bool**

### {{% prop-heading "physicsControlled" %}}

> **bool**

### {{% prop-heading "isPushable" %}}

> **bool**

### {{% prop-heading "humanPlayerControlled" %}}

> **bool**

### {{% prop-heading "interactiveManDownAllowed" %}}

> **bool**

### {{% prop-heading "showNametag" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierEntityData](/vext/ref/fb/soldierentitydata) type.

