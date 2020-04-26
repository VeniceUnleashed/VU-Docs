---
title: UIMessageCompData
---

Inherits from [UIComponentData](/vext/ref/fb/uicomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[UIMessageCompData](#constructor-0)**() |
| **[UIMessageCompData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIMessageCompData](#constructor-2)**(other: [UIComponentData](/vext/ref/fb/uicomponentdata)) |
| **[UIMessageCompData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIMessageCompData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "scoreAggregateTime" >}} | float |
| {{< prop "chatMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "killMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "scoreMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "scoreMinorMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "scoreMajorMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "gameMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "staticMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "outOfBoundsMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "killScoreMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "logLinesMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "tooltipMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "subtitleMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "rewardMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "localKillMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "serverAdminYellMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "gunMasterMessageInfo" >}} | [MessageInfo](/vext/ref/fb/messageinfo) |
| {{< prop "forceSubtitlesForTheseLevels" >}} | string[] |
| {{< prop "forceSubtitlesOffForTheseLevels" >}} | string[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIMessageCompData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIMessageCompData {#constructor-0}

> **UIMessageCompData**()

Creates a new [UIMessageCompData](/vext/ref/fb/uimessagecompdata) frostbite instance.

### UIMessageCompData {#constructor-1}

> **UIMessageCompData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIMessageCompData](/vext/ref/fb/uimessagecompdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIMessageCompData {#constructor-2}

> **UIMessageCompData**(other: [UIComponentData](/vext/ref/fb/uicomponentdata))

Casts an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata) to [UIMessageCompData](/vext/ref/fb/uimessagecompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIComponentData](/vext/ref/fb/uicomponentdata) | The instance to cast to [UIMessageCompData](/vext/ref/fb/uimessagecompdata). |

### UIMessageCompData {#constructor-3}

> **UIMessageCompData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIMessageCompData](/vext/ref/fb/uimessagecompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIMessageCompData](/vext/ref/fb/uimessagecompdata). |

### UIMessageCompData {#constructor-4}

> **UIMessageCompData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIMessageCompData](/vext/ref/fb/uimessagecompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIMessageCompData](/vext/ref/fb/uimessagecompdata). |

## Properties

### {{% prop-heading "scoreAggregateTime" %}}

> **float**

### {{% prop-heading "chatMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "killMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "scoreMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "scoreMinorMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "scoreMajorMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "gameMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "staticMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "outOfBoundsMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "killScoreMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "logLinesMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "tooltipMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "subtitleMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "rewardMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "localKillMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "serverAdminYellMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "gunMasterMessageInfo" %}}

> **[MessageInfo](/vext/ref/fb/messageinfo)**

### {{% prop-heading "forceSubtitlesForTheseLevels" %}}

> **string**[]

### {{% prop-heading "forceSubtitlesOffForTheseLevels" %}}

> **string**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIMessageCompData](/vext/ref/fb/uimessagecompdata) type.

