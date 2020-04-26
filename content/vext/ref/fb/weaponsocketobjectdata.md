---
title: WeaponSocketObjectData
---

Inherits from [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase)

## Summary

### Constructors

|  |
| --- |
| **[WeaponSocketObjectData](#constructor-0)**() |
| **[WeaponSocketObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponSocketObjectData](#constructor-2)**(other: [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase)) |
| **[WeaponSocketObjectData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "referencedAssetHashes" >}} | int[] |
| {{< prop "asset1p" >}} | [Asset](/vext/ref/fb/asset) \| nil |
| {{< prop "asset1pzoom" >}} | [Asset](/vext/ref/fb/asset) \| nil |
| {{< prop "asset3p" >}} | [Asset](/vext/ref/fb/asset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponSocketObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponSocketObjectData {#constructor-0}

> **WeaponSocketObjectData**()

Creates a new [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata) frostbite instance.

### WeaponSocketObjectData {#constructor-1}

> **WeaponSocketObjectData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponSocketObjectData {#constructor-2}

> **WeaponSocketObjectData**(other: [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase))

Casts an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase) to [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase) | The instance to cast to [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata). |

### WeaponSocketObjectData {#constructor-3}

> **WeaponSocketObjectData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata). |

## Properties

### {{% prop-heading "referencedAssetHashes" %}}

> **int**[]

### {{% prop-heading "asset1p" %}}

> **[Asset](/vext/ref/fb/asset)** \| **nil**

### {{% prop-heading "asset1pzoom" %}}

> **[Asset](/vext/ref/fb/asset)** \| **nil**

### {{% prop-heading "asset3p" %}}

> **[Asset](/vext/ref/fb/asset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata) type.

