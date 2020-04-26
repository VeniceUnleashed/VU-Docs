---
title: CustomizeSoldierData
---

Inherits from [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata)

## Summary

### Constructors

|  |
| --- |
| **[CustomizeSoldierData](#constructor-0)**() |
| **[CustomizeSoldierData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CustomizeSoldierData](#constructor-2)**(other: [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata)) |
| **[CustomizeSoldierData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[CustomizeSoldierData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weapons" >}} | [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot)[] |
| {{< prop "activeSlot" >}} | [WeaponSlot](/vext/ref/fb/weaponslot) |
| {{< prop "deathPickup" >}} | [PickupEntityAsset](/vext/ref/fb/pickupentityasset) \| nil |
| {{< prop "removeAllExistingWeapons" >}} | bool |
| {{< prop "disableDeathPickup" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CustomizeSoldierData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CustomizeSoldierData {#constructor-0}

> **CustomizeSoldierData**()

Creates a new [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata) frostbite instance.

### CustomizeSoldierData {#constructor-1}

> **CustomizeSoldierData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CustomizeSoldierData {#constructor-2}

> **CustomizeSoldierData**(other: [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata))

Casts an instance of type [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata) to [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata) | The instance to cast to [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata). |

### CustomizeSoldierData {#constructor-3}

> **CustomizeSoldierData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata). |

### CustomizeSoldierData {#constructor-4}

> **CustomizeSoldierData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata). |

## Properties

### {{% prop-heading "weapons" %}}

> **[UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot)**[]

### {{% prop-heading "activeSlot" %}}

> **[WeaponSlot](/vext/ref/fb/weaponslot)**

### {{% prop-heading "deathPickup" %}}

> **[PickupEntityAsset](/vext/ref/fb/pickupentityasset)** \| **nil**

### {{% prop-heading "removeAllExistingWeapons" %}}

> **bool**

### {{% prop-heading "disableDeathPickup" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata) type.

