---
title: MaterialContainerPair
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MaterialContainerPair](#constructor-0)**() |
| **[MaterialContainerPair](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MaterialContainerPair](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "flagsAndIndex" >}} | int |
| {{< prop "physicsPropertyIndex" >}} | int |
| {{< prop "physicsMaterialIndex" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialContainerPair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialContainerPair {#constructor-0}

> **MaterialContainerPair**()

Creates a new [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) frostbite instance.

### MaterialContainerPair {#constructor-1}

> **MaterialContainerPair**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MaterialContainerPair {#constructor-2}

> **MaterialContainerPair**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MaterialContainerPair](/vext/ref/fb/materialcontainerpair). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MaterialContainerPair](/vext/ref/fb/materialcontainerpair). |

## Properties

### {{% prop-heading "flagsAndIndex" %}}

> **int**

### {{% prop-heading "physicsPropertyIndex" %}}

> **int**

### {{% prop-heading "physicsMaterialIndex" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) type.

