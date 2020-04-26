---
title: MovementActionRoot
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[MovementActionRoot](#constructor-0)**() |
| **[MovementActionRoot](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MovementActionRoot](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MovementActionRoot](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "startSequence" >}} | [MovementActionData](/vext/ref/fb/movementactiondata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MovementActionRoot" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MovementActionRoot {#constructor-0}

> **MovementActionRoot**()

Creates a new [MovementActionRoot](/vext/ref/fb/movementactionroot) frostbite instance.

### MovementActionRoot {#constructor-1}

> **MovementActionRoot**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MovementActionRoot](/vext/ref/fb/movementactionroot) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MovementActionRoot {#constructor-2}

> **MovementActionRoot**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MovementActionRoot](/vext/ref/fb/movementactionroot). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MovementActionRoot](/vext/ref/fb/movementactionroot). |

### MovementActionRoot {#constructor-3}

> **MovementActionRoot**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MovementActionRoot](/vext/ref/fb/movementactionroot). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MovementActionRoot](/vext/ref/fb/movementactionroot). |

## Properties

### {{% prop-heading "startSequence" %}}

> **[MovementActionData](/vext/ref/fb/movementactiondata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MovementActionRoot](/vext/ref/fb/movementactionroot) type.

