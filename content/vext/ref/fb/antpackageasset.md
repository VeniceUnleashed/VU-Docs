---
title: AntPackageAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[AntPackageAsset](#constructor-0)**() |
| **[AntPackageAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AntPackageAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AntPackageAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "win32FileName" >}} | string |
| {{< prop "xePs3FileName" >}} | string |
| {{< prop "packagingType" >}} | [AntPackagingType](/vext/ref/fb/antpackagingtype) |
| {{< prop "streamingGuid" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "chunkSize" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntPackageAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntPackageAsset {#constructor-0}

> **AntPackageAsset**()

Creates a new [AntPackageAsset](/vext/ref/fb/antpackageasset) frostbite instance.

### AntPackageAsset {#constructor-1}

> **AntPackageAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntPackageAsset](/vext/ref/fb/antpackageasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AntPackageAsset {#constructor-2}

> **AntPackageAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AntPackageAsset](/vext/ref/fb/antpackageasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AntPackageAsset](/vext/ref/fb/antpackageasset). |

### AntPackageAsset {#constructor-3}

> **AntPackageAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AntPackageAsset](/vext/ref/fb/antpackageasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AntPackageAsset](/vext/ref/fb/antpackageasset). |

## Properties

### {{% prop-heading "win32FileName" %}}

> **string**

### {{% prop-heading "xePs3FileName" %}}

> **string**

### {{% prop-heading "packagingType" %}}

> **[AntPackagingType](/vext/ref/fb/antpackagingtype)**

### {{% prop-heading "streamingGuid" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "chunkSize" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntPackageAsset](/vext/ref/fb/antpackageasset) type.

