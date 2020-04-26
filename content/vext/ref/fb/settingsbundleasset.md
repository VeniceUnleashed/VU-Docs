---
title: SettingsBundleAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[SettingsBundleAsset](#constructor-0)**() |
| **[SettingsBundleAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SettingsBundleAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SettingsBundleAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "settings" >}} | [SystemSettings](/vext/ref/fb/systemsettings)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SettingsBundleAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SettingsBundleAsset {#constructor-0}

> **SettingsBundleAsset**()

Creates a new [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset) frostbite instance.

### SettingsBundleAsset {#constructor-1}

> **SettingsBundleAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SettingsBundleAsset {#constructor-2}

> **SettingsBundleAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset). |

### SettingsBundleAsset {#constructor-3}

> **SettingsBundleAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset). |

## Properties

### {{% prop-heading "settings" %}}

> **[SystemSettings](/vext/ref/fb/systemsettings)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SettingsBundleAsset](/vext/ref/fb/settingsbundleasset) type.

