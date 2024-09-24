export const isSingleEmoji = (message: string): boolean => {
    // This regular expression matches a single emoji.
    const emojiRegex = /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}|\p{Emoji_Component})$/u;
    return emojiRegex.test(message.trim());
}