---
title: SoldierWeaponSwitchingData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[SoldierWeaponSwitchingData](#constructor-0)**() |
| **[SoldierWeaponSwitchingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierWeaponSwitchingData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoldierWeaponSwitchingData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "switchMap" >}} | [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata)[] |
| {{< prop "directSwitchMap" >}} | [DirectWeaponSwitchingMapData](/vext/ref/fb/directweaponswitchingmapdata)[] |
| {{< prop "switchToGadgetCooldownTime" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierWeaponSwitchingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierWeaponSwitchingData {#constructor-0}

> **SoldierWeaponSwitchingData**()

Creates a new [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata) frostbite instance.

### SoldierWeaponSwitchingData {#constructor-1}

> **SoldierWeaponSwitchingData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierWeaponSwitchingData {#constructor-2}

> **SoldierWeaponSwitchingData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata). |

### SoldierWeaponSwitchingData {#constructor-3}

> **SoldierWeaponSwitchingData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata). |

## Properties

### {{% prop-heading "switchMap" %}}

> **[WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata)**[]

### {{% prop-heading "directSwitchMap" %}}

> **[DirectWeaponSwitchingMapData](/vext/ref/fb/directweaponswitchingmapdata)**[]

### {{% prop-heading "switchToGadgetCooldownTime" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata) type.

