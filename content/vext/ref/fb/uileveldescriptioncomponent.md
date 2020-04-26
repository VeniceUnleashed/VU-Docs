---
title: UILevelDescriptionComponent
---

Inherits from [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent)

## Summary

### Constructors

|  |
| --- |
| **[UILevelDescriptionComponent](#constructor-0)**() |
| **[UILevelDescriptionComponent](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UILevelDescriptionComponent](#constructor-2)**(other: [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent)) |
| **[UILevelDescriptionComponent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "mpLoadingAssetPath" >}} | string |
| {{< prop "loadingMusic" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "loadingMusicPath" >}} | string |
| {{< prop "levelImagePath" >}} | string |
| {{< prop "loadingImagePath" >}} | string |
| {{< prop "spLoadingAssetPath" >}} | string |
| {{< prop "gpsPosition" >}} | [UIGPSPosition](/vext/ref/fb/uigpsposition) |
| {{< prop "hintAsset" >}} | [GameTipAsset](/vext/ref/fb/gametipasset) \| nil |
| {{< prop "creditsAssets" >}} | [UICreditsAsset](/vext/ref/fb/uicreditsasset)[] |
| {{< prop "minimapData" >}} | [UIMinimapData](/vext/ref/fb/uiminimapdata) |
| {{< prop "levelCompledStatData" >}} | [UILevelStatData](/vext/ref/fb/uilevelstatdata) |
| {{< prop "levelScoreStatData" >}} | [UILevelStatData](/vext/ref/fb/uilevelstatdata) |
| {{< prop "sortIndex" >}} | int |
| {{< prop "isMenuLevel" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UILevelDescriptionComponent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UILevelDescriptionComponent {#constructor-0}

> **UILevelDescriptionComponent**()

Creates a new [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent) frostbite instance.

### UILevelDescriptionComponent {#constructor-1}

> **UILevelDescriptionComponent**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UILevelDescriptionComponent {#constructor-2}

> **UILevelDescriptionComponent**(other: [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent))

Casts an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent) to [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent) | The instance to cast to [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent). |

### UILevelDescriptionComponent {#constructor-3}

> **UILevelDescriptionComponent**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent). |

## Properties

### {{% prop-heading "mpLoadingAssetPath" %}}

> **string**

### {{% prop-heading "loadingMusic" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "loadingMusicPath" %}}

> **string**

### {{% prop-heading "levelImagePath" %}}

> **string**

### {{% prop-heading "loadingImagePath" %}}

> **string**

### {{% prop-heading "spLoadingAssetPath" %}}

> **string**

### {{% prop-heading "gpsPosition" %}}

> **[UIGPSPosition](/vext/ref/fb/uigpsposition)**

### {{% prop-heading "hintAsset" %}}

> **[GameTipAsset](/vext/ref/fb/gametipasset)** \| **nil**

### {{% prop-heading "creditsAssets" %}}

> **[UICreditsAsset](/vext/ref/fb/uicreditsasset)**[]

### {{% prop-heading "minimapData" %}}

> **[UIMinimapData](/vext/ref/fb/uiminimapdata)**

### {{% prop-heading "levelCompledStatData" %}}

> **[UILevelStatData](/vext/ref/fb/uilevelstatdata)**

### {{% prop-heading "levelScoreStatData" %}}

> **[UILevelStatData](/vext/ref/fb/uilevelstatdata)**

### {{% prop-heading "sortIndex" %}}

> **int**

### {{% prop-heading "isMenuLevel" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent) type.

