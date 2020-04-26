---
title: PickupEntityAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[PickupEntityAsset](#constructor-0)**() |
| **[PickupEntityAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PickupEntityAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PickupEntityAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "data" >}} | [PickupEntityData](/vext/ref/fb/pickupentitydata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PickupEntityAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PickupEntityAsset {#constructor-0}

> **PickupEntityAsset**()

Creates a new [PickupEntityAsset](/vext/ref/fb/pickupentityasset) frostbite instance.

### PickupEntityAsset {#constructor-1}

> **PickupEntityAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PickupEntityAsset](/vext/ref/fb/pickupentityasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PickupEntityAsset {#constructor-2}

> **PickupEntityAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PickupEntityAsset](/vext/ref/fb/pickupentityasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PickupEntityAsset](/vext/ref/fb/pickupentityasset). |

### PickupEntityAsset {#constructor-3}

> **PickupEntityAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PickupEntityAsset](/vext/ref/fb/pickupentityasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PickupEntityAsset](/vext/ref/fb/pickupentityasset). |

## Properties

### {{% prop-heading "data" %}}

> **[PickupEntityData](/vext/ref/fb/pickupentitydata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PickupEntityAsset](/vext/ref/fb/pickupentityasset) type.

