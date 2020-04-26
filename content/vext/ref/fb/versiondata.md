---
title: VersionData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[VersionData](#constructor-0)**() |
| **[VersionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VersionData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[VersionData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "disclaimer" >}} | string |
| {{< prop "version" >}} | int |
| {{< prop "dateTime" >}} | string |
| {{< prop "branchId" >}} | string |
| {{< prop "gameName" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VersionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VersionData {#constructor-0}

> **VersionData**()

Creates a new [VersionData](/vext/ref/fb/versiondata) frostbite instance.

### VersionData {#constructor-1}

> **VersionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VersionData](/vext/ref/fb/versiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VersionData {#constructor-2}

> **VersionData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [VersionData](/vext/ref/fb/versiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [VersionData](/vext/ref/fb/versiondata). |

### VersionData {#constructor-3}

> **VersionData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VersionData](/vext/ref/fb/versiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VersionData](/vext/ref/fb/versiondata). |

## Properties

### {{% prop-heading "disclaimer" %}}

> **string**

### {{% prop-heading "version" %}}

> **int**

### {{% prop-heading "dateTime" %}}

> **string**

### {{% prop-heading "branchId" %}}

> **string**

### {{% prop-heading "gameName" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VersionData](/vext/ref/fb/versiondata) type.

