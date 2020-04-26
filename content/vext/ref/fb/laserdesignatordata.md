---
title: LaserDesignatorData
---

Inherits from [LockingWeaponData](/vext/ref/fb/lockingweapondata)

## Summary

### Constructors

|  |
| --- |
| **[LaserDesignatorData](#constructor-0)**() |
| **[LaserDesignatorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LaserDesignatorData](#constructor-2)**(other: [LockingWeaponData](/vext/ref/fb/lockingweapondata)) |
| **[LaserDesignatorData](#constructor-3)**(other: [WeaponData](/vext/ref/fb/weapondata)) |
| **[LaserDesignatorData](#constructor-4)**(other: [ToolData](/vext/ref/fb/tooldata)) |
| **[LaserDesignatorData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "postLockTime" >}} | float |
| {{< prop "bomberTime" >}} | float |
| {{< prop "bombWarnTime" >}} | float |
| {{< prop "bomberSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LaserDesignatorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LaserDesignatorData {#constructor-0}

> **LaserDesignatorData**()

Creates a new [LaserDesignatorData](/vext/ref/fb/laserdesignatordata) frostbite instance.

### LaserDesignatorData {#constructor-1}

> **LaserDesignatorData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LaserDesignatorData](/vext/ref/fb/laserdesignatordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LaserDesignatorData {#constructor-2}

> **LaserDesignatorData**(other: [LockingWeaponData](/vext/ref/fb/lockingweapondata))

Casts an instance of type [LockingWeaponData](/vext/ref/fb/lockingweapondata) to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [LockingWeaponData](/vext/ref/fb/lockingweapondata) | The instance to cast to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata). |

### LaserDesignatorData {#constructor-3}

> **LaserDesignatorData**(other: [WeaponData](/vext/ref/fb/weapondata))

Casts an instance of type [WeaponData](/vext/ref/fb/weapondata) to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponData](/vext/ref/fb/weapondata) | The instance to cast to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata). |

### LaserDesignatorData {#constructor-4}

> **LaserDesignatorData**(other: [ToolData](/vext/ref/fb/tooldata))

Casts an instance of type [ToolData](/vext/ref/fb/tooldata) to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ToolData](/vext/ref/fb/tooldata) | The instance to cast to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata). |

### LaserDesignatorData {#constructor-5}

> **LaserDesignatorData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata). |

## Properties

### {{% prop-heading "postLockTime" %}}

> **float**

### {{% prop-heading "bomberTime" %}}

> **float**

### {{% prop-heading "bombWarnTime" %}}

> **float**

### {{% prop-heading "bomberSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LaserDesignatorData](/vext/ref/fb/laserdesignatordata) type.

