---
title: SoldierWeaponData
---

Inherits from [WeaponEntityData](/vext/ref/fb/weaponentitydata)

## Summary

### Constructors

|  |
| --- |
| **[SoldierWeaponData](#constructor-0)**() |
| **[SoldierWeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierWeaponData](#constructor-2)**(other: [WeaponEntityData](/vext/ref/fb/weaponentitydata)) |
| **[SoldierWeaponData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[SoldierWeaponData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[SoldierWeaponData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SoldierWeaponData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SoldierWeaponData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoldierWeaponData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "interactionOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "weaponModifierData" >}} | [WeaponModifierData](/vext/ref/fb/weaponmodifierdata)[] |
| {{< prop "aimingController" >}} | [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata) \| nil |
| {{< prop "firstPersonCamera" >}} | [FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata) \| nil |
| {{< prop "hud" >}} | [HudData](/vext/ref/fb/huddata) |
| {{< prop "damageGiverName" >}} | string |
| {{< prop "pickupSettings" >}} | [PickupSettingsData](/vext/ref/fb/pickupsettingsdata) |
| {{< prop "animBaseSet" >}} | [WeaponAnimBaseSetEnum](/vext/ref/fb/weaponanimbasesetenum) |
| {{< prop "animationData" >}} | [AntPackageAsset](/vext/ref/fb/antpackageasset) \| nil |
| {{< prop "renderFov" >}} | float |
| {{< prop "zoomRenderFov" >}} | float |
| {{< prop "streamGroup1p" >}} | [StreamGroupData](/vext/ref/fb/streamgroupdata) \| nil |
| {{< prop "voiceOverInfo" >}} | [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo) \| nil |
| {{< prop "quickThrowType" >}} | [QuickThrowTypeEnum](/vext/ref/fb/quickthrowtypeenum) |
| {{< prop "customization" >}} | [SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset) \| nil |
| {{< prop "weaponFloatParam" >}} | float |
| {{< prop "sockets" >}} | [SocketData](/vext/ref/fb/socketdata)[] |
| {{< prop "switchWeaponStateInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "soldierWeaponBlueprint" >}} | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint) \| nil |
| {{< prop "persistenceId" >}} | string |
| {{< prop "allowSwitchingToWeaponOutOfAmmo" >}} | bool |
| {{< prop "hideWhenOutOfAmmo" >}} | bool |
| {{< prop "lowerOnOwnTeam" >}} | bool |
| {{< prop "redeployWhenSwitchingWeaponStates" >}} | bool |
| {{< prop "useQuickThrowOnAutomaticSwitchback" >}} | bool |
| {{< prop "enableBreathControl" >}} | bool |
| {{< prop "canBeInSupportedShooting" >}} | bool |
| {{< prop "allowSwitchingToWeaponReloading" >}} | bool |
| {{< prop "switchToPrimaryWhenOutOfAmmo" >}} | bool |
| {{< prop "allowSwitchingToWeaponInVehicles" >}} | bool |
| {{< prop "isSilenced" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierWeaponData {#constructor-0}

> **SoldierWeaponData**()

Creates a new [SoldierWeaponData](/vext/ref/fb/soldierweapondata) frostbite instance.

### SoldierWeaponData {#constructor-1}

> **SoldierWeaponData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierWeaponData](/vext/ref/fb/soldierweapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierWeaponData {#constructor-2}

> **SoldierWeaponData**(other: [WeaponEntityData](/vext/ref/fb/weaponentitydata))

Casts an instance of type [WeaponEntityData](/vext/ref/fb/weaponentitydata) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponEntityData](/vext/ref/fb/weaponentitydata) | The instance to cast to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). |

### SoldierWeaponData {#constructor-3}

> **SoldierWeaponData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). |

### SoldierWeaponData {#constructor-4}

> **SoldierWeaponData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). |

### SoldierWeaponData {#constructor-5}

> **SoldierWeaponData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). |

### SoldierWeaponData {#constructor-6}

> **SoldierWeaponData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). |

### SoldierWeaponData {#constructor-7}

> **SoldierWeaponData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). |

### SoldierWeaponData {#constructor-8}

> **SoldierWeaponData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierWeaponData](/vext/ref/fb/soldierweapondata). |

## Properties

### {{% prop-heading "interactionOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "weaponModifierData" %}}

> **[WeaponModifierData](/vext/ref/fb/weaponmodifierdata)**[]

### {{% prop-heading "aimingController" %}}

> **[SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata)** \| **nil**

### {{% prop-heading "firstPersonCamera" %}}

> **[FirstPersonCameraData](/vext/ref/fb/firstpersoncameradata)** \| **nil**

### {{% prop-heading "hud" %}}

> **[HudData](/vext/ref/fb/huddata)**

### {{% prop-heading "damageGiverName" %}}

> **string**

### {{% prop-heading "pickupSettings" %}}

> **[PickupSettingsData](/vext/ref/fb/pickupsettingsdata)**

### {{% prop-heading "animBaseSet" %}}

> **[WeaponAnimBaseSetEnum](/vext/ref/fb/weaponanimbasesetenum)**

### {{% prop-heading "animationData" %}}

> **[AntPackageAsset](/vext/ref/fb/antpackageasset)** \| **nil**

### {{% prop-heading "renderFov" %}}

> **float**

### {{% prop-heading "zoomRenderFov" %}}

> **float**

### {{% prop-heading "streamGroup1p" %}}

> **[StreamGroupData](/vext/ref/fb/streamgroupdata)** \| **nil**

### {{% prop-heading "voiceOverInfo" %}}

> **[EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo)** \| **nil**

### {{% prop-heading "quickThrowType" %}}

> **[QuickThrowTypeEnum](/vext/ref/fb/quickthrowtypeenum)**

### {{% prop-heading "customization" %}}

> **[SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset)** \| **nil**

### {{% prop-heading "weaponFloatParam" %}}

> **float**

### {{% prop-heading "sockets" %}}

> **[SocketData](/vext/ref/fb/socketdata)**[]

### {{% prop-heading "switchWeaponStateInputAction" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "soldierWeaponBlueprint" %}}

> **[SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint)** \| **nil**

### {{% prop-heading "persistenceId" %}}

> **string**

### {{% prop-heading "allowSwitchingToWeaponOutOfAmmo" %}}

> **bool**

### {{% prop-heading "hideWhenOutOfAmmo" %}}

> **bool**

### {{% prop-heading "lowerOnOwnTeam" %}}

> **bool**

### {{% prop-heading "redeployWhenSwitchingWeaponStates" %}}

> **bool**

### {{% prop-heading "useQuickThrowOnAutomaticSwitchback" %}}

> **bool**

### {{% prop-heading "enableBreathControl" %}}

> **bool**

### {{% prop-heading "canBeInSupportedShooting" %}}

> **bool**

### {{% prop-heading "allowSwitchingToWeaponReloading" %}}

> **bool**

### {{% prop-heading "switchToPrimaryWhenOutOfAmmo" %}}

> **bool**

### {{% prop-heading "allowSwitchingToWeaponInVehicles" %}}

> **bool**

### {{% prop-heading "isSilenced" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierWeaponData](/vext/ref/fb/soldierweapondata) type.

