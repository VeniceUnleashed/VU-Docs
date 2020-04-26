---
title: BigWorldSettingsAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[BigWorldSettingsAsset](#constructor-0)**() |
| **[BigWorldSettingsAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BigWorldSettingsAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[BigWorldSettingsAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "settings" >}} | [BigWorldSetting](/vext/ref/fb/bigworldsetting)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BigWorldSettingsAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BigWorldSettingsAsset {#constructor-0}

> **BigWorldSettingsAsset**()

Creates a new [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset) frostbite instance.

### BigWorldSettingsAsset {#constructor-1}

> **BigWorldSettingsAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BigWorldSettingsAsset {#constructor-2}

> **BigWorldSettingsAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset). |

### BigWorldSettingsAsset {#constructor-3}

> **BigWorldSettingsAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset). |

## Properties

### {{% prop-heading "settings" %}}

> **[BigWorldSetting](/vext/ref/fb/bigworldsetting)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset) type.

