---
title: PlayerTypeProfile
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[PlayerTypeProfile](#constructor-0)**() |
| **[PlayerTypeProfile](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PlayerTypeProfile](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PlayerTypeProfile](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "values" >}} | [PersistenceData](/vext/ref/fb/persistencedata) \| nil |
| {{< prop "awards" >}} | [AwardDataTree](/vext/ref/fb/awarddatatree) \| nil |
| {{< prop "rankParams" >}} | [RankParamsAsset](/vext/ref/fb/rankparamsasset) \| nil |
| {{< prop "scoring" >}} | [ScoringData](/vext/ref/fb/scoringdata) \| nil |
| {{< prop "dogTags" >}} | [DogTagsAsset](/vext/ref/fb/dogtagsasset) \| nil |
| {{< prop "eloParams" >}} | [EloParameters](/vext/ref/fb/eloparameters) |
| {{< prop "staticUnlocks" >}} | [StaticUnlockList](/vext/ref/fb/staticunlocklist) \| nil |
| {{< prop "spamSettings" >}} | [StatSpamSettings](/vext/ref/fb/statspamsettings) \| nil |
| {{< prop "orderedUnlockNames" >}} | string[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PlayerTypeProfile" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PlayerTypeProfile {#constructor-0}

> **PlayerTypeProfile**()

Creates a new [PlayerTypeProfile](/vext/ref/fb/playertypeprofile) frostbite instance.

### PlayerTypeProfile {#constructor-1}

> **PlayerTypeProfile**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PlayerTypeProfile](/vext/ref/fb/playertypeprofile) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PlayerTypeProfile {#constructor-2}

> **PlayerTypeProfile**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PlayerTypeProfile](/vext/ref/fb/playertypeprofile). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PlayerTypeProfile](/vext/ref/fb/playertypeprofile). |

### PlayerTypeProfile {#constructor-3}

> **PlayerTypeProfile**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PlayerTypeProfile](/vext/ref/fb/playertypeprofile). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PlayerTypeProfile](/vext/ref/fb/playertypeprofile). |

## Properties

### {{% prop-heading "values" %}}

> **[PersistenceData](/vext/ref/fb/persistencedata)** \| **nil**

### {{% prop-heading "awards" %}}

> **[AwardDataTree](/vext/ref/fb/awarddatatree)** \| **nil**

### {{% prop-heading "rankParams" %}}

> **[RankParamsAsset](/vext/ref/fb/rankparamsasset)** \| **nil**

### {{% prop-heading "scoring" %}}

> **[ScoringData](/vext/ref/fb/scoringdata)** \| **nil**

### {{% prop-heading "dogTags" %}}

> **[DogTagsAsset](/vext/ref/fb/dogtagsasset)** \| **nil**

### {{% prop-heading "eloParams" %}}

> **[EloParameters](/vext/ref/fb/eloparameters)**

### {{% prop-heading "staticUnlocks" %}}

> **[StaticUnlockList](/vext/ref/fb/staticunlocklist)** \| **nil**

### {{% prop-heading "spamSettings" %}}

> **[StatSpamSettings](/vext/ref/fb/statspamsettings)** \| **nil**

### {{% prop-heading "orderedUnlockNames" %}}

> **string**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PlayerTypeProfile](/vext/ref/fb/playertypeprofile) type.

