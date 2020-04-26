---
title: IntUnlockValuePair
---

Inherits from [UnlockValuePair](/vext/ref/fb/unlockvaluepair)

## Summary

### Constructors

|  |
| --- |
| **[IntUnlockValuePair](#constructor-0)**() |
| **[IntUnlockValuePair](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[IntUnlockValuePair](#constructor-2)**(other: [UnlockValuePair](/vext/ref/fb/unlockvaluepair)) |
| **[IntUnlockValuePair](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultValue" >}} | int |
| {{< prop "unlockedValue" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "IntUnlockValuePair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### IntUnlockValuePair {#constructor-0}

> **IntUnlockValuePair**()

Creates a new [IntUnlockValuePair](/vext/ref/fb/intunlockvaluepair) frostbite instance.

### IntUnlockValuePair {#constructor-1}

> **IntUnlockValuePair**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [IntUnlockValuePair](/vext/ref/fb/intunlockvaluepair) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### IntUnlockValuePair {#constructor-2}

> **IntUnlockValuePair**(other: [UnlockValuePair](/vext/ref/fb/unlockvaluepair))

Casts an instance of type [UnlockValuePair](/vext/ref/fb/unlockvaluepair) to [IntUnlockValuePair](/vext/ref/fb/intunlockvaluepair). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UnlockValuePair](/vext/ref/fb/unlockvaluepair) | The instance to cast to [IntUnlockValuePair](/vext/ref/fb/intunlockvaluepair). |

### IntUnlockValuePair {#constructor-3}

> **IntUnlockValuePair**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [IntUnlockValuePair](/vext/ref/fb/intunlockvaluepair). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [IntUnlockValuePair](/vext/ref/fb/intunlockvaluepair). |

## Properties

### {{% prop-heading "defaultValue" %}}

> **int**

### {{% prop-heading "unlockedValue" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [IntUnlockValuePair](/vext/ref/fb/intunlockvaluepair) type.

