---
title: BlueprintBundleMetadata
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[BlueprintBundleMetadata](#constructor-0)**() |
| **[BlueprintBundleMetadata](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BlueprintBundleMetadata](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "bundlePathName" >}} | string |
| {{< prop "bundleName" >}} | string |
| {{< prop "blueprintName" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BlueprintBundleMetadata" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BlueprintBundleMetadata {#constructor-0}

> **BlueprintBundleMetadata**()

Creates a new [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata) frostbite instance.

### BlueprintBundleMetadata {#constructor-1}

> **BlueprintBundleMetadata**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BlueprintBundleMetadata {#constructor-2}

> **BlueprintBundleMetadata**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata). |

## Properties

### {{% prop-heading "bundlePathName" %}}

> **string**

### {{% prop-heading "bundleName" %}}

> **string**

### {{% prop-heading "blueprintName" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata) type.

