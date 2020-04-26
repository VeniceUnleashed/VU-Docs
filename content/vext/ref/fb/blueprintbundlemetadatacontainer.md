---
title: BlueprintBundleMetadataContainer
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[BlueprintBundleMetadataContainer](#constructor-0)**() |
| **[BlueprintBundleMetadataContainer](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BlueprintBundleMetadataContainer](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[BlueprintBundleMetadataContainer](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "items" >}} | [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BlueprintBundleMetadataContainer" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BlueprintBundleMetadataContainer {#constructor-0}

> **BlueprintBundleMetadataContainer**()

Creates a new [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer) frostbite instance.

### BlueprintBundleMetadataContainer {#constructor-1}

> **BlueprintBundleMetadataContainer**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BlueprintBundleMetadataContainer {#constructor-2}

> **BlueprintBundleMetadataContainer**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer). |

### BlueprintBundleMetadataContainer {#constructor-3}

> **BlueprintBundleMetadataContainer**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer). |

## Properties

### {{% prop-heading "items" %}}

> **[BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer) type.

