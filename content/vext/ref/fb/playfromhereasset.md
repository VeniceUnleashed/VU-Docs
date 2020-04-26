---
title: PlayFromHereAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[PlayFromHereAsset](#constructor-0)**() |
| **[PlayFromHereAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PlayFromHereAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PlayFromHereAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "soldier" >}} | [Blueprint](/vext/ref/fb/blueprint) \| nil |
| {{< prop "animatedSkeletonDatabase" >}} | [AnimatedSkeletonDatabase](/vext/ref/fb/animatedskeletondatabase) \| nil |
| {{< prop "antProject" >}} | [AntProjectAsset](/vext/ref/fb/antprojectasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PlayFromHereAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PlayFromHereAsset {#constructor-0}

> **PlayFromHereAsset**()

Creates a new [PlayFromHereAsset](/vext/ref/fb/playfromhereasset) frostbite instance.

### PlayFromHereAsset {#constructor-1}

> **PlayFromHereAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PlayFromHereAsset](/vext/ref/fb/playfromhereasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PlayFromHereAsset {#constructor-2}

> **PlayFromHereAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PlayFromHereAsset](/vext/ref/fb/playfromhereasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PlayFromHereAsset](/vext/ref/fb/playfromhereasset). |

### PlayFromHereAsset {#constructor-3}

> **PlayFromHereAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PlayFromHereAsset](/vext/ref/fb/playfromhereasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PlayFromHereAsset](/vext/ref/fb/playfromhereasset). |

## Properties

### {{% prop-heading "soldier" %}}

> **[Blueprint](/vext/ref/fb/blueprint)** \| **nil**

### {{% prop-heading "animatedSkeletonDatabase" %}}

> **[AnimatedSkeletonDatabase](/vext/ref/fb/animatedskeletondatabase)** \| **nil**

### {{% prop-heading "antProject" %}}

> **[AntProjectAsset](/vext/ref/fb/antprojectasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PlayFromHereAsset](/vext/ref/fb/playfromhereasset) type.

