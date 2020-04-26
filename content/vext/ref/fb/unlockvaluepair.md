---
title: UnlockValuePair
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UnlockValuePair](#constructor-0)**() |
| **[UnlockValuePair](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UnlockValuePair](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UnlockValuePair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UnlockValuePair {#constructor-0}

> **UnlockValuePair**()

Creates a new [UnlockValuePair](/vext/ref/fb/unlockvaluepair) frostbite instance.

### UnlockValuePair {#constructor-1}

> **UnlockValuePair**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UnlockValuePair](/vext/ref/fb/unlockvaluepair) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UnlockValuePair {#constructor-2}

> **UnlockValuePair**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UnlockValuePair](/vext/ref/fb/unlockvaluepair). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UnlockValuePair](/vext/ref/fb/unlockvaluepair). |

## Properties

### {{% prop-heading "id" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UnlockValuePair](/vext/ref/fb/unlockvaluepair) type.

